"use client";
import useGuestbookForm from "@/app/utils/useGuestbookForm";
import React, { useState } from "react";
import Button from "../Button/page";
import { IoCloseOutline } from "react-icons/io5";

export default function Form({ children, closeForm }) {
  const {
    state: { firstName, lastName, comment },
    setState,
    submitForm,
  } = useGuestbookForm();

  // State to handle the success message
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };

  // Custom form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const message = await submitForm(e); // Handle form submission and get a message
    setSuccessMessage(message);

    // Optional: Clear success message after a few seconds
    setTimeout(() => setSuccessMessage(""), 5000); // Clear after 5 seconds
  };

  return (
    <>
      {successMessage ? (
        <div className="flex items-center justify-center w-full h-screen bg-[#FAF6EA] text-blueberry">
          <button
            type="button"
            onClick={closeForm}
            className="absolute top-8 right-8 text-blueberry border-none"
          >
            <IoCloseOutline size={25} />
          </button>
          <div className="text-center">
            <p className="font-cabinet lg:text-[3vw]">{successMessage}</p>
          </div>
        </div>
      ) : (
        <form
          className="py-24 text-blueberry w-full h-screen bg-[#FAF6EA] px-10 lg:px-20 lg:top-8 lg:py-16 lg:max-h-[50rem] overflow-hidden relative"
          onSubmit={handleSubmit} // Use the custom submit handler
        >
          <button
            type="button"
            onClick={closeForm}
            className="absolute top-8 right-8 text-blueberry border-none"
          >
            <IoCloseOutline size={25} />
          </button>
          <h2 className="font-cabinet text-blueberry lg:font-medium text-[6vw] pb-5 lg:pb-10 lg:text-[3vw] lg:w-1/3">
            Dela gärna en mening om ditt besök!
          </h2>
          <p className="mb-10 font-cabinet lg:text-[1.3vw] lg:w-1/3">
            Vi granskar och publicerar kommentarer löpande innan de syns på
            hemsidan.
          </p>

          {/* Container for Inputs - Aligns inputs to the right on desktop */}
          <div className="lg:flex lg:flex-col lg:items-end lg:space-y-4 ">
            {/* First Name and Last Name Fields */}
            <div className="lg:flex lg:space-x-4">
              {/* First Name */}
              <div className="flex flex-col mb-6 lg:mb-0 lg:w-[23rem]">
                <label
                  htmlFor="firstName"
                  className="uppercase font-cabinet font-regular tracking-widest text-[4vw] lg:text-[1vw]"
                >
                  Förnamn
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  className="input focus:outline-none bg-black border-blueberry border-b font-cabinet text-[4vw] pt-1 lg:text-[1vw] lg:w-full"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col mb-6 lg:w-[23rem]">
                <label
                  htmlFor="lastName"
                  className="uppercase font-cabinet font-regular tracking-widest text-[4vw] lg:text-[1vw]"
                >
                  Efternamn
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  className="input focus:outline-none bg-black border-blueberry border-b font-cabinet text-[4vw] pt-1 lg:text-[1vw] lg:w-full"
                />
              </div>
            </div>

            {/* Comment Field directly under First Name on desktop */}
            <div className="flex flex-col lg:w-[47rem]">
              <label
                htmlFor="comment"
                className="uppercase font-cabinet font-regular tracking-widest text-[4vw] lg:text-[1vw]"
              >
                Kommentar
              </label>
              <input
                type="text"
                id="comment"
                name="comment"
                value={comment}
                onChange={handleChange}
                className="input focus:outline-none bg-black border-blueberry border-b font-cabinet text-[4vw] pt-1 lg:text-[1vw] lg:w-full"
              />
              {/* Submit Button */}
              <div className="absolute mt-24 right-10 ">
                <Button
                  type="submit"
                  className="uppercase border border-blueberry mt-5 tracking-widest font-cabinet text-[4vw] cursor-pointer lg:text-[1vw] px-4 py-3 transition-blueberry duration-[700ms] hover:bg-blueberry"
                >
                  Skicka kommentar
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
