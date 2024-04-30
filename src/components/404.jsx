import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col lg:gap-5 gap-10 justify-center items-center">
      <div className="flex">
        <img
          className="lg:w-80 w-40"
          src="https://img.freepik.com/premium-vector/cheese-number-4-four-font-kids-number-figure-4_172107-2674.jpg?w=360"
          alt=""
        />
        <img
          className="lg:w-80 w-40"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPod0nZwtHj4Fvq8UaSC3cDZTUULlI5v7TDVkZJUd6GQ&s"
          alt=""
        />
        <img
          className="lg:w-80 w-40"
          src="https://img.freepik.com/premium-vector/cheese-number-4-four-font-kids-number-figure-4_172107-2674.jpg?w=360"
          alt=""
        />
      </div>
      <div>
        <Link to={"/"} className="underline text-gray-900 lg:text-lg">Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
