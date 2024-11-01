import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here, you can handle your form submission logic if needed
    setSubmitted(true); // Set submitted state to true
    // Reset the form fields (if needed)
    e.target.reset(); // This will reset the form fields
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-900 via-black to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent border-b-4 border-gray-500 pb-2 shadow-md shadow-gray-600">
            Contact
          </p>
          <p className="py-6">Use the form below to drop me a line</p>
        </div>

        {submitted ? ( // Conditional rendering based on submission
          <p className="text-lg text-center text-cyan-600">
            Thank you! I'll get back to you soon.
          </p>
        ) : (
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
              onSubmit={handleSubmit} // Handle form submission
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's get together
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
