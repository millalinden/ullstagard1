import HistoryComponent from "@/app/components/HistoryComponent/page";

export default function History() {
  return (
    <>
      <section className="mt-32 w-auto h-auto font-cabinet text-[4vw] flex flex-col items-start justify-start lg:mx-10">
       
        <p className="font-cabinet font-regular leading-[3rem] text-[10vw] text-blueberry mx-3 md:text-[15vw] md:leading-[6rem] lg:text-[4vw] lg:w-2/3 lg:text-start lg:mb-8 lg:leading-none">
          Utforska Ullsta Gårds historia.
        </p>
        <div>
          <HistoryComponent />
        </div>
      </section>
    </>
  );
}
