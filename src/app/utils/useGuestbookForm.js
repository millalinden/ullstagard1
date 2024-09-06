// Hook for managing the state and functions of the GuestBook Form 

import { useState } from "react";

const defaultState = {
  firstName: "",
  lastName: "",
  comment: "",
};

const useGuestbookForm = () => {
  const [state, setState] = useState(defaultState);

  // Function to handle form submission
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("/api/guestbookRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName: state.lastName,
          comment: state.comment,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
    

      // Clear the form fields after successful submission
      setState(defaultState);

      // success message or any result from the response
      return "Tack för din kommentar!";
    } catch (error) {
      console.error("Error submitting form:", error);
      // error message if submission fails
      return "Något gick fel. Försök igen.";
    }
  };

  return {
    state,
    setState: (newState) => {
      setState((prevState) => ({
        ...prevState,
        ...newState,
      }));
    },
    submitForm, // Return the modified submitForm function
  };
};

export default useGuestbookForm;
