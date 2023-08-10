import React from "react";
import Navbar from "./Navbar";

const Book = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <div className="mx-auto w-[30vh] border-2 text-center">Book</div>
        </div>
      </div>
    </>
  );
};

export default Book;
