import Image from "next/image";
import CloseButton from "../CloseBtn/page";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

export default function ImageModal({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
}) {
  const image = images[selectedIndex]; // Get the current image object from the index

  return (
    selectedImage && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-95 lg:bg-opacity-75 backdrop-blur-lg w-screen">
        <CloseButton
          className="absolute top-6 right-6 lg:top-5 lg:right-5 text-white"
          onClick={onClose}
        ></CloseButton>
        <div className="relative flex flex-col lg:flex-row items-center">
          <button
            className="hidden lg:flex text-white border border-white rounded-full h-10 w-10 lg:items-center lg:justify-center md:h-12 md:w-12 lg:h-11 lg:w-11 hover:text-zinc-300 lg:hover:-translate-x-1 lg:duration-300 lg:ease-in-out lg:mr-4"
            onClick={onNext}
          >
            <HiOutlineArrowLongLeft size={24} />
          </button>
          <div className="mx-4 mt-12 lg:mt-0 flex flex-col items-center">
            <Image
              src={selectedImage}
              alt={image.description || "Selected Image"}
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
            {image.description && (
              <p className="text-white mt-2 lg:mt-4 text-center font-satoshi">
                {image.description}
              </p>
            )}
          </div>
          <button
            className="hidden lg:flex text-white border border-white rounded-full lg:items-center lg:justify-center md:h-12 md:w-12 lg:h-11 lg:w-11 hover:text-zinc-300 lg:hover:translate-x-1 lg:duration-300 lg:ease-in-out lg:ml-4"
            onClick={onNext}
          >
            <HiOutlineArrowLongRight size={24} />
          </button>

          <div className="flex gap-10 mt-3 lg:hidden">
            <button
              className="flex text-white border border-white rounded-full h-9 w-9 items-center justify-center hover:text-zinc-300 lg:hover:-translate-x-1 lg:duration-300 lg:ease-in-out"
              onClick={onNext}
            >
              <HiOutlineArrowLongLeft size={24} />
            </button>
            <button
              className="flex text-white border border-white rounded-full h-9 w-9 items-center justify-center hover:text-zinc-300 lg:hover:translate-x-1 lg:duration-300 lg:ease-in-out lg:ml-4"
              onClick={onNext}
            >
              <HiOutlineArrowLongRight size={24} />
            </button>
          </div>
        </div>
      </div>
    )
  );
}
