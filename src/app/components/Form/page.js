export default function Form() {
  return (
    <>
      <form className="text-blueberry w-screen h-screen bg-[#E4D292] relative lg:max-h-[30rem]">
        <h2 className="font-erode text-blueberry text-[7vw] p-14 lg:text-[3vw] lg:mx-20">
          Dela gärna en mening om ditt besök!
        </h2>
        <div className="lg:flex	">
          <div className="flex flex-col mx-14 mb-6">
            <label
              htmlFor="firstName"
              className="uppercase font-satoshi font-[600] text-[4vw] tracking-wide lg:text-[1vw]"
            >
              Förnamn
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="focus:outline-none bg-[#E4D292] border-black border-b font-satoshi text-[4vw] pt-2 lg:text-[1vw] "
            />
          </div>
          <div className="flex flex-col mx-14 mb-6">
            <label
              htmlFor="lastName"
              className="uppercase font-satoshi font-[600] text-[4vw] tracking-wide lg:text-[1vw]"
            >
              Efternamn
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="focus:outline-none bg-[#E4D292] border-black border-b font-satoshi text-[4vw] pt-2 lg:text-[1vw] "
            />
          </div>
        </div>
        <div className="flex flex-col mx-14 mb-20">
          <label
            htmlFor="comment"
            className="uppercase font-satoshi font-[600] text-[4vw] tracking-wide lg:text-[1vw]"
          >
            Kommentar
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            className="focus:outline-none bg-[#E4D292] border-black border-b font-satoshi text-[4vw] lg:text-[1vw] pt-2"
          />
        </div>

        <div className="absolute bottom-4 right-5 p-4">
          <button
            type="submit"
            className="uppercase font-satoshi font-[600] text-[4vw] border-black border py-2 px-4 cursor-pointer tracking-wide lg:text-[1vw]"
          >
            Publicera
          </button>
        </div>
        <div>
          <p className="uppercase font-satoshi text-[4vw] text-[#616161] opacity-65 tracking-wide mx-8 font-[600] lg:text-[1vw] [writing-mode:vertical-lr] transform rotate-180">
            Ullsta Gård
          </p>
        </div>
      </form>
    </>
  );
}
