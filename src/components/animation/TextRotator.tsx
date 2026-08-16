import React from "react";
import { useTheme } from "@/components/ThemeProvider";

const roles = [
  "Full Stack Web Developer",
  "AI Enthusiast",
  "React & Next.js Developer",
  "C++ Programmer",
  "CS Undergrad (Class of '28)",
  "Full Stack Web Developer" // Duplicate the first one at the end for smooth infinite loop
];

function TextRotator() {
  const { theme } = useTheme();
  
  return (
    <div className="py-4 rounded-md flex flex-col justify-start items-start overflow-hidden">
      <div className="font-mono text-base sm:text-2xl [text-wrap:balance] text-secondary flex items-center">
        I am a
        <span className="inline-flex ml-3 flex-col h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-sans font-bold text-base sm:text-2xl leading-tight [&_li]:block animate-text-slide">
            {roles.map((role, index) => (
              <li 
                key={index} 
                className="transition-colors"
                style={{ color: theme === 'light' ? '#C4563A' : '#E07A5F' }}
              >
                {role}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
