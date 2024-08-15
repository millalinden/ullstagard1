// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";

// export default function ImageModal({
//   images,
//   selectedImage,
//   onClose,
//   onNext,
//   onPrev,
// }) {
//   return (
//     selectedImage && (
//       <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-85 lg:bg-opacity-75 backdrop-blur-md w-screen">
//         <button
//           className="absolute top-5 right-5 py-1 px-2.5 lg:hover:rotate-90 lg:duration-300 lg:transition-all text-xl text-white font-bold"
//           onClick={onClose}
//         >
//           &#10005;
//         </button>
//         <div className="relative flex items-center">
//           <button
//             className="text-white text-3xl md:text-5xl hover:text-zinc-300 lg:hover:-translate-x-1 lg:duration-300 lg:ease-in-out"
//             onClick={onPrev}
//           >
//             <IoIosArrowBack />
//           </button>
//           <div className="mx-4">
//             <Image
//               src={selectedImage}
//               alt="Selected Image"
//               width={500}
//               height={500}
//               className="max-w-full max-h-full"
//             />
//           </div>
//           <button
//             className="text-white text-3xl md:text-5xl hover:text-zinc-300 lg:hover:translate-x-1 lg:duration-300 lg:ease-in-out"
//             onClick={onNext}
//           >
//             <IoIosArrowForward />
//           </button>
//         </div>
//       </div>
//     )
//   );
// }

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
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-95 lg:bg-opacity-75 backdrop-blur-lg w-screen">
        <button
          className="absolute top-6 right-6 lg:top-5 lg:right-5 py-1 px-2.5 lg:hover:rotate-90 lg:duration-300 lg:transition-all text-xl text-white font-bold"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="relative flex flex-col lg:flex-row items-center">
          <button
            className="hidden lg:block text-white text-3xl md:text-5xl hover:text-zinc-300 lg:hover:-translate-x-1 lg:duration-300 lg:ease-in-out lg:mr-4"
            onClick={onPrev}
          >
            <IoIosArrowBack />
          </button>
          <div className="mx-4 mt-10 lg:mt-0">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
          <button
            className="hidden lg:block text-white text-3xl md:text-5xl hover:text-zinc-300 lg:hover:translate-x-1 lg:duration-300 lg:ease-in-out lg:ml-4"
            onClick={onNext}
          >
            <IoIosArrowForward />
          </button>
          <div className="flex mt-4 lg:hidden">
            <button
              className="text-white text-3xl md:text-5xl hover:text-zinc-300 mx-2"
              onClick={onPrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-white text-3xl md:text-5xl hover:text-zinc-300 mx-2"
              onClick={onNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    )
  );
}
