import Image from "next/image"; // Assuming you are using Next.js

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
        <Image
          src={selectedImage}
          alt="Selected Image"
          width={500}
          height={500}
        />
        <button
          className="absolute top-5 right-5 py-1 px-2.5 hover:rotate-90 transition-all text-xl text-white font-bold"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="">
          <button
            className="absolute top-1/2 -translate-y-1/2 right-96 text-white py-6 px-4 md:py-24 md:px-4 text-3xl md:text-5xl"
            onClick={onNext}
          >
            &gt;
          </button>
          <button
            className="absolute -translate-y-1/2 left-96 top-1/2 text-white md:py-24 md:px-4 text-2xl md:text-5xl"
            onClick={onPrev}
          >
            &lt;
          </button>
        </div>
      </div>
    )
  );
}
