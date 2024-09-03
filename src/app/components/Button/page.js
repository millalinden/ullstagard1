
const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 font-regular uppercase text-blueberry-100 transition-blueberry duration-[700ms] hover:text-blueberry group ${className}`}
    >
      {children}

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[1px] w-0 bg-blueberry transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[1px] bg-blueberry transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-blueberry transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[1px] bg-blueberry transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;
