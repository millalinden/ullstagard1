
const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 font-regular border border-blueberry rounded-full uppercase text-blueberry-100 transition-blueberry duration-[700ms] hover:text-blueberry group ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
