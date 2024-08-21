import Image from "next/image";

export default function Card({ src, description, alt, className,title }) {
  return (
    <section className={`lg:flex-shrink-0 ${className} px-10`}>
      <Image src={src} width={500} height={600} alt={alt || "Image"} />
      <h3 className="font-erode tracking-wide my-2 text-[6vw] font-bold text-blueberry">{title}</h3>
      <p className="font-erode mb-5 mt-3 text-[4vw] lg:text-[20px] lg:w-full lg:whitespace-normal">
        {description}
      </p>
    </section>
  );
}
