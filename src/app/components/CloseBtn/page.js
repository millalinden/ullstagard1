import { IoCloseOutline } from "react-icons/io5";
export default function CloseButton({ onClick, className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`relative overflow-hidden border justify-center flex items-center border-blueberry rounded-full h-11 w-11 font-bold text-blueberry tracking-wide text-2xl transition-all duration-300 ${className} group`}
        aria-label={typeof children === "string" ? children : "Close Button"}
      >
        {/* Initial text, moves up on hover */}
        <span className="block relative transform transition-transform duration-500 group-hover:-translate-y-[200%]">
        <IoCloseOutline />
        </span>
        {/* New text coming from the bottom on hover */}
        <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 hover:bg-white hover:text-blueberry">
        <IoCloseOutline/>        </span>
      </button>
    );
  }
  