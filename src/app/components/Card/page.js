import Image from "next/image";

export default function Card({ src, description, alt, className }) {
  return (
    <section className={`lg:flex-shrink-0 ${className} px-10`}>
      <Image src={src} width={500} height={600} alt={alt || "Image"} />
      <p className="font-erode mb-5 mt-3 lg:text-[20px] lg:w-full lg:whitespace-normal">
        {description}
      </p>
    </section>
  );
}
