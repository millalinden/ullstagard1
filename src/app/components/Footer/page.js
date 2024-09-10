

export default function Footer() {

  return (
    <footer className="font-cabinet w-screen bg-[#FAF6EA] h-96 py-6 px-2 relative flex flex-col justify-between md:justify-normal lg:justify-around text-blueberry">
      <div className="transform slideUp">
        <p className="text-[8vw] py-3 px-3 not-italic md:text-[3vw] lg:text-[3vw] tracking-wide font-regular lg:ml-10 lg:pb-3">
          Ullsta Gård
        </p>
        <address className="flex justify-between gap-16 items-start py-2 px-3 mb-4 md:gap-10 md:pr-20 md:justify-end lg:justify-end lg:items-start lg:gap-32 lg:pr-32">
          <p className="text-[5vw] not-italic md:text-[2vw] lg:text-[1.5vw]">Adress</p>
          <p className="text-[5vw] px-6 not-italic md:text-[2vw] lg:text-[1.5vw] lg:pb-6">
            Gåsinge-Ullsta Stora Huset <br />
            646 91 Gnesta Sweden
          </p>
        </address>
        <div className="flex justify-between gap-16 items-center py-2 px-3 md:pr-28 md:items-center md:justify-end lg:justify-end lg:items-start lg:gap-40 lg:pr-40 lg:pl-5">
          <p className="text-[5vw] md:text-[2vw] lg:text-[1.5vw]">Kontakt</p>
          <p className="text-[5vw] not-italic md:text-[2vw] lg:text-[1.5vw] lg:pb-6 lg:hover:underline">
            <a href="mailto:ullstagasinge@gmail.com">ullstagasinge@gmail.com</a>
          </p>
        </div>
      </div>
      <p className="absolute bottom-4 left-6 text-[12px] not-italic lg:left-14 lg:bottom-5">
        Designed & Created by Milla Lindén
      </p>
    </footer>
  );
}
