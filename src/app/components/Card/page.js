// import Image from "next/image";

// export default function Card({ src, description, alt, className, title }) {
//   return (
//     <section
//       className={`flex flex-col lg:flex-shrink-0 ${className} font-cabinet mx-3 mb-4`}
//     >
//       <div className="w-full aspect-square overflow-hidden lg:w-3/4 lg:h-2/4">
//         <Image
//           src={src}
//           width={400}
//           height={400}
//           alt={alt || "Image"}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="flex items-start lg:flex-col">
//         <p className="mt-2 text-[5vw] text-blueberry font-bold leading-tight lg:text-[1.5vw]">
//           {title}
//           <span className=" ml-2 mr-2 text-blueberry lg:text-[1.5vw]">•</span>
//         </p>
//         <p className="mt-2 text-[5vw] lg:text-[1.5vw] text-blueberry leading-tight text-left lg:text-none">
//           {description}
//         </p>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Card({ src, description, alt, className, title }) {
  return (
    <section
      className={`flex lg:flex-shrink-0 lg:flex lg:flex-col lg:items-start ${className} font-cabinet mx-3 mb-4`}
    >
      <div className="w-1/3 h-32 lg:w-full lg:h-full lg:aspect-square overflow-hidden">
        <Image
          src={src}
          width={400}
          height={400}
          alt={alt || "Image"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col px-5 lg:px-0">
        <p className="mt-2 text-[4vw] text-blueberry font-bold leading-tight lg:text-[1.5vw]">
          {title}
        </p>
        <p className="mt-2 text-[4vw] lg:text-[1.5vw] text-blueberry leading-tight text-left lg:text-none">
          {description}
        </p>
      </div>
    </section>
  );
}
