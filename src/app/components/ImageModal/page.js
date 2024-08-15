import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function ImageModal({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
}) {
  return (
    selectedImage && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-75 backdrop-blur w-screen">
        <button
          className="absolute top-5 right-5 py-1 px-2.5 hover:rotate-90 duration-300 transition-all text-xl text-white font-bold"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="relative flex items-center">
          <button
            className="text-white text-3xl md:text-5xl hover:text-zinc-300 hover:-translate-x-1 duration-300 ease-in-out"
            onClick={onPrev}
          >
            <IoIosArrowBack />
          </button>
          <div className="mx-4">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
          <button
            className="text-white text-3xl md:text-5xl hover:text-zinc-300 hover:translate-x-1 duration-300 ease-in-out"
            onClick={onNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    )
  );
}
