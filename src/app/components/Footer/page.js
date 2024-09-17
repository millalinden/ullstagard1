export default function Footer() {
  return (
    <footer className="font-cabinet w-screen bg-[#FAF6EA] h-96 py-6 px-2 relative flex flex-col justify-between md:justify-normal lg:justify-around text-blueberry">
      <div className="">
        <p className="text-[8vw] py-3 px-3 pb-10 not-italic md:text-[3vw] lg:text-[3vw] tracking-wide font-regular lg:ml-10 lg:pb-3">
          Ullsta Gård
        </p>

        {/* Right-aligned Grid for Address and Contact */}
        <div className="flex justify-center lg:justify-end lg:pr-32">
          <div className="grid grid-cols-2 gap-x-1 py-2 px-3 mb-4 lg:gap-x-20">
            {/* Adress Label and Content */}
            <p className="text-[1.2rem] not-italic md:text-[2vw] lg:text-[1.5vw]">
              Adress
            </p>
            <p className="text-[1.2rem] ml-[-30px] pb-10 not-italic md:text-[2vw] lg:text-[1.5vw] lg:pb-6">
              Gåsinge-Ullsta Stora Huset <br />
              646 91 Gnesta Sweden
            </p>

            {/* Kontakt Label and Content */}
              <p className="text-[1.2rem] not-italic md:text-[2vw] lg:text-[1.5vw]">
                Kontakt
              </p>
              <p className="text-[1.2rem] text-wrap ml-[-30px] not-italic md:text-[2vw] lg:text-[1.5vw] lg:pb-6 lg:hover:underline">
                <a href="mailto:ullstagasinge@gmail.com">
                  ullstagasinge@gmail.com
                </a>
              </p>
          </div>
        </div>
      </div>

      {/* Footer Credit */}
      <p className="absolute bottom-4 left-6 text-[12px] not-italic lg:left-14 lg:bottom-5">
        Designed & Created by Milla Lindén
      </p>
    </footer>
  );
}
