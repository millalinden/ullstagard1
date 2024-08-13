import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-erode mb-10">
      <div className="border border-black mx-16 flex justify-between">
        <div className="lg:py-10">
          <address>
            <p className="uppercase not-italic lg:text-[24px] tracking-wide font-medium lg:ml-10 lg:pb-3">
              Gåsinge Ullsta Gård
            </p>
            <p className="lg:ml-10 not-italic lg:text-[16px] lg:pb-6">
              <a href="mailto:ullstagasinge@gmail.com">
                ullstagasinge@gmail.com
              </a>
            </p>
          </address>
          <p className="ml-10 text-[12px]">
            Designed & Created by Milla Lindén
          </p>
        </div>

        <div className="flex">
          <div className="w-px bg-black ml-20 mr-40 flex flex-col gap-4 justify-center">
            <Link href="/" className="lg:whitespace-nowrap pl-24">
              Hitta Hit
            </Link>
            <Link href="/" className=" pl-24">
              Kontakt
            </Link>
            <Link href="/" className=" pl-24">
              Gästbok
            </Link>
          </div>
          <div className="w-px lg:ml-20 lg:mr-56 bg-black lg:flex lg:flex-col lg:gap-4 justify-center">
            <Link href="/" className=" pl-24">
              Historik
            </Link>
            <Link href="/" className="lg:whitespace-nowrap  pl-24">
              Familjen Lindén
            </Link>
            <Link href="/" className=" pl-24">
              Bildgalleri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
