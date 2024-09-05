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
    const message = await submitForm(e); // Handle form submission and get a message
    setSuccessMessage(message);

    // Optional: Clear success message after a few seconds
    setTimeout(() => setSuccessMessage(""), 5000); // Clear after 5 seconds
  };

  return (
    <form
      className="py-24 text-blueberry w-full h-screen bg-[#CBD0D4] px-10 lg:max-h-[40rem] overflow-hidden"
      onSubmit={handleSubmit} // Use the custom submit handler
    >
      <button
        type="button"
        onClick={closeForm}
        className="absolute top-8 right-8 text-blueberry border-none"
      >
        <IoCloseOutline size={25}/>
      </button>
      <h2 className="font-cabinet text-blueberry text-[6vw] pb-10 lg:text-[2vw]">
        Dela gärna en mening om ditt besök!
      </h2>

      {/* Display success message
      {successMessage && (
        <div className="text-green-500 mb-4">{successMessage}</div>
      )} */}

      {/* Container for Inputs - Aligns inputs to the right on desktop */}
      <div className="lg:flex lg:flex-col lg:items-end lg:space-y-4 lg:pb-10">
        {/* First Name and Last Name Fields */}
        <div className="lg:flex lg:space-x-4">
          {/* First Name */}
          <div className="flex flex-col mb-6 lg:mb-0 lg:w-[23rem]">
            <label
              htmlFor="firstName"
              className="uppercase font-cabinet font-regular tracking-widest leading-none text-[4vw] lg:text-[1vw]"
            >
              Förnamn
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              className="input focus:outline-none bg-[#FAF6EA] border-blueberry border-b font-cabinet text-[4vw] pt-1 lg:text-[1vw] lg:w-full"
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
              className="input focus:outline-none bg-[#FAF6EA] border-blueberry border-b font-cabinet text-[4vw] pt-1 lg:text-[1vw] lg:w-full"
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
            className="input focus:outline-none bg-[#FAF6EA] border-blueberry border-b font-cabinet text-[4vw] pt-1 lg:text-[1vw] lg:w-full"
          />
          {/* Submit Button */}
          <div className="absolute mt-36 right-10 ">
            <Button
              type="submit"
              className="uppercase border border-blueberry mt-5 tracking-widest font-cabinet text-[4vw] cursor-pointer lg:text-[1vw] px-4 py-3"
            >
              Publicera
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
