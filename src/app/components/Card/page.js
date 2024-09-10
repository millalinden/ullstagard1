

import Image from "next/image";

export default function Card({ src, description, alt, className, title }) {
  return (
    <section
      className={`flex lg:flex-shrink-0 md:flex md:flex-col md:items-start lg:flex lg:flex-col lg:items-start lg:mx-0 ${className}  font-cabinet mx-3 mb-3`}
    >
      <div className=" w-full aspect-square h-32 md:w-full md:h-full md:aspect-square lg:w-full lg:h-full lg:relative lg:aspect-square overflow-hidden group">
        <Image
          src={src}
          width={400}
          height={400}
          alt={alt || "Image"}
          className="w-full h-full object-cover lg:transition lg:duration-500 lg:ease-in-out lg:hover:blur-sm"
        />

        {/* Title and description - visible on hover */}
        <div className="text-white hidden lg:flex lg:justify-between lg:items-start lg:absolute lg:top-0 lg:left-0 lg:w-full lg:p-4 lg:opacity-0 group-hover:opacity-100 lg:transition lg:duration-500 lg:ease-in-out">
          {/* Title in the left top corner */}
          <p className="lg:text-[1.3vw] lg:font-medium lg:uppercase lg:tracking-widest lg:self-start">
            {title}
          </p>

          {/* Description in the right top corner */}
          <p className="lg:w-2/3 lg:text-[1.3vw] lg:font-medium lg:uppercase lg:tracking-widest lg:self-start lg:text-right">
            {description}
          </p>
        </div>
      </div>

      <div className="w-[90%] flex flex-col px-5 lg:px-0">
        <p className="lg:hidden text-[5vw] text-blueberry font-bold leading-tight lg:text-[1.5vw]">
          {title}
        </p>
        <p className="flex text-[3.5vw] text-blueberry leading-tight text-left lg:hidden lg:text-[1.5vw] lg:text-none">
          {description}
        </p>
      </div>
    </section>
  );
}
