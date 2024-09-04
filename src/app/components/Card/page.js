import Image from "next/image";

export default function Card({ src, description, alt, className, title }) {
  return (
    <section
      className={`flex flex-col lg:flex-shrink-0 ${className} font-cabinet mx-3 mb-4`}
    >
      <div className="w-full aspect-square overflow-hidden">
        <Image
          src={src}
          width={400}
          height={400}
          alt={alt || "Image"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-start">
        <p className="mt-2 text-[5vw] text-blueberry font-bold leading-tight">
          {title}
          <span className=" ml-2 mr-2 text-blueberry">•</span>
        </p>
        <p className="mt-2 text-[5vw] lg:text-[1.5vw] text-blueberry leading-tight text-left">
          {description}
        </p>
      </div>
    </section>
  );
}
