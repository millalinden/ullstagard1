

export default function Footer() {
  return (
    <footer className="font-cabinet bg-[#FAF6EA] h-96 py-6 px-3 relative flex flex-col justify-between">
      <div>
        <p className="text-[8vw] py-3 px-3 not-italic lg:text-[24px] tracking-wide font-regular lg:ml-10 lg:pb-3">
          Ullsta Gård
        </p>
        <address className="flex justify-between gap-16 items-start py-2 px-3 mb-4">
          <p className="text-[5vw] not-italic">Adress</p>
          <p className="text-[5vw] px-4 lg:ml-10 not-italic lg:text-[16px] lg:pb-6">
            Gåsinge-Ullsta Stora Huset <br />
            646 91 Gnesta Sweden
          </p>
        </address>
        <div className="flex justify-between gap-16 items-center py-2 px-3">
          <p className="text-[5vw]">Kontakt</p>
          <p className="text-[5vw] lg:ml-10 not-italic lg:text-[16px] lg:pb-6">
            <a href="mailto:ullstagasinge@gmail.com">ullstagasinge@gmail.com</a>
          </p>
        </div>
      </div>
      <p className="absolute bottom-4 left-6 text-[12px] not-italic">
        Designed & Created by Milla Lindén
      </p>
    </footer>
  );
}
