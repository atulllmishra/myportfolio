"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * 0.35,
      y: distanceY * 0.35,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: position.x === 0 && position.y === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
      }}
      className={`inline-flex items-center justify-center ${className}`}
      data-magnetic="true"
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className="inline-flex">
        {content}
      </a>
    );
  }

  return <div onClick={onClick} className="inline-flex">{content}</div>;
}


