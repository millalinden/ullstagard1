import Image from "next/image";

export default function Card({ src, description, alt, className }) {
  return (
    <section className={`flex-shrink-0 ${className}`}>
      <Image src={src} width={500} height={600} alt={alt || "Image"} />
      <p className="font-erode text-[20px] w-full whitespace-normal">
        {description}
      </p>
    </section>
  );
}
