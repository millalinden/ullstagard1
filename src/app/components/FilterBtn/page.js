
export default function FilterButton({ onClick, children, className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`relative font-cabinet overflow-hidden border border-blueberry rounded-xl px-4 py-2 leading-none font-regular text-blueberry tracking-wide text-[3.5vw] md:text-[1.5vw] lg:text-[0.9vw] transition-all duration-300 ${className} group`}
        aria-label={typeof children === "string" ? children : "Filter button"}
      >
        {/* Initial text, moves up on hover */}
        <span className="block relative transform transition-transform duration-500 group-hover:-translate-y-[200%] ">
          {children}
        </span>
        {/* New text coming from the bottom on hover */}
        <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          {children}
        </span>
      </button>
    );
  }
  