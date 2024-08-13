// src/components/Button.js
import React from "react";

const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative uppercase overflow-hidden ${className} group`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle
          className="circle"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default Button;
