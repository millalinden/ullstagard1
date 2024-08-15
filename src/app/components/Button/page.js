const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative uppercase overflow-hidden pr-4 lg:pr-5 transition-transform duration-300 ease-in-out transform hover:font-[600] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
