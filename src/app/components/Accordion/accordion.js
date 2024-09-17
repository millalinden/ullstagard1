"use client";
import { useState, useRef, useEffect } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      // Reset height before transition
      contentRef.current.style.height = isOpen ? "auto" : "0px";
      // Force reflow to apply the transition
      contentRef.current.offsetHeight;
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
    }
  }, [isOpen]);

  return (
    <div>
      <div className="flex font-cabinet">
        <button
          className="text-[5.5vw] font-cabinet text-blueberry pr-1 md:text-[4vw] lg:text-[1.3vw]"
          onClick={toggleAccordion}
        >
          {title}
        </button>
        <div className="flex items-center">
          <svg
            className={`text-[6vw] text-blueberry transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989592 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989592 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden text-[5vw] md:text-[4vw] font-cabinet text-blueberry lg:text-[1.3vw]`}
        style={{ height: isOpen ? 'auto' : '0px' }}
      >
        <hr className="border-black my-1" />
        {content}
      </div>
    </div>
  );
}
