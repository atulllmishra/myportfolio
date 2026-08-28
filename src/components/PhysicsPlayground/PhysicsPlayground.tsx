"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { X, RefreshCw } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

const badges = [
  "React", "Next.js", "TypeScript", "Node.js", "WebGL",
  "Three.js", "TailwindCSS", "Framer Motion", "C++", "Python",
  "PostgreSQL", "MongoDB", "Express", "Docker", "Git"
];

export default function PhysicsPlayground() {
  const [isActive, setIsActive] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleToggle = () => {
      setIsActive((prev) => {
        if (!prev) audioHaptics.playPop(true);
        return !prev;
      });
    };
    window.addEventListener("toggle-zero-g", handleToggle);
    return () => window.removeEventListener("toggle-zero-g", handleToggle);
  }, []);

  useEffect(() => {
    if (!isActive || !sceneRef.current) return;

    // Matter.js setup
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Events = Matter.Events;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const engine = Engine.create();
    engineRef.current = engine;
    
    // Zero gravity!
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });
    renderRef.current = render;

    // Boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    World.add(engine.world, [
      Bodies.rectangle(width / 2, -50, width, 100, wallOptions),
      Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions),
      Bodies.rectangle(-50, height / 2, 100, height, wallOptions),
      Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions),
    ]);

    // Create badges as physics bodies
    const accentColor = "#C4563A";
    const cardColor = "#FFFFFF";
    const textColor = "#352A25";

    const badgeBodies = badges.map((text, i) => {
      // Estimate width based on text
      const w = text.length * 10 + 40;
      const h = 40;
      
      const x = Math.random() * (width - 100) + 50;
      const y = Math.random() * (height - 100) + 50;
      
      return Bodies.rectangle(x, y, w, h, {
        restitution: 0.9,
        friction: 0.005,
        frictionAir: 0.01,
        render: {
          fillStyle: cardColor,
          strokeStyle: accentColor,
          lineWidth: 1,
        },
        label: text, // Store text in label to render it manually
      });
    });

    World.add(engine.world, badgeBodies);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);
    
    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Add collision sound
    Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      if (pairs.length > 0) {
        // Calculate velocity magnitude of first pair
        const bodyA = pairs[0].bodyA;
        const speed = Math.sqrt(bodyA.velocity.x ** 2 + bodyA.velocity.y ** 2);
        if (speed > 1) {
          audioHaptics.playClick(Math.min(800, 200 + speed * 50), 0.02, "triangle");
        }
      }
    });

    // Custom render loop for text
    Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = "bold 14px 'Times New Roman', Georgia, serif";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = textColor;

      badgeBodies.forEach((body) => {
        const { x, y } = body.position;
        context.translate(x, y);
        context.rotate(body.angle);
        context.fillText(body.label, 0, 0);
        context.rotate(-body.angle);
        context.translate(-x, -y);
      });
    });

    Runner.run(Runner.create(), engine);
    Render.run(render);

    // Initial scatter burst
    badgeBodies.forEach(b => {
      const forceMagnitude = 0.02 * b.mass;
      Matter.Body.applyForce(b, b.position, {
        x: (Math.random() - 0.5) * forceMagnitude,
        y: (Math.random() - 0.5) * forceMagnitude
      });
    });

    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
    };
  }, [isActive, theme]);

  const handleClose = () => {
    setIsActive(false);
    audioHaptics.playPop(false);
  };

  const handleBurst = () => {
    if (!engineRef.current) return;
    audioHaptics.playSwitch();
    
    const bodies = Matter.Composite.allBodies(engineRef.current.world);
    bodies.forEach(b => {
      if (!b.isStatic) {
        const forceMagnitude = 0.05 * b.mass;
        Matter.Body.applyForce(b, b.position, {
          x: (Math.random() - 0.5) * forceMagnitude,
          y: (Math.random() - 0.5) * forceMagnitude
        });
      }
    });
  };

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-main/80 backdrop-blur-md">
      {/* Matter.js Canvas Container */}
      <div ref={sceneRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      
      {/* UI Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <div className="px-4 py-2 rounded-full bg-card border border-accent text-xs font-mono font-bold text-primary shadow-lg flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          ZERO-G PHYSICS MODE
        </div>
        
        <button 
          onClick={handleBurst}
          className="p-2 rounded-full bg-card border border-card hover:border-accent text-secondary hover:text-primary transition-colors shadow-lg"
          title="Apply Random Burst"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        <button 
          onClick={handleClose}
          className="p-2 rounded-full bg-card border border-card hover:border-red-500 hover:text-red-500 transition-colors shadow-lg text-secondary"
          title="Exit Zero-G"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-secondary pointer-events-none">
        Grab and toss the badges
      </div>
    </div>
  );
}
