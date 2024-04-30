import React, { useState } from "react";
import { useParams } from "react-router";

function RightMainContent(data) {
  const params = useParams();
  const [findData, setFindData] = useState();
  function gn() {
    setFindData(data?.data?.meals.find((item) => item.idMeal === "52797"));
  }

  setTimeout(() => {
    gn();
  }, 1000);
  return (
    <div className="right-side w-full justify-start gap-5 lg:w-1/2 p-4 min-h-screen dark:bg-[#222831] dark:text-white flex flex-col lg:justify-between lg:gap-2 self-start items-start">
      <video className="w-full rounded h-60" controls autoPlay>
        <source
          src="https://youtu.be/fnc_krWZ_SA?si=CJw5tNpSQXd3GbOb"
          type="video/mp4"
        />
      </video>
      <h1 className="p-0 m-0 text-2xl font-semibold">{findData?.strMeal}</h1>
      <p className="">{findData?.strInstructions}</p>

      <div className="self-start flex-wrap flex gap-2">
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient1}
        </span>
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient2}
        </span>
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient3}
        </span>
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient4}
        </span>
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient5}
        </span>
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient6}
        </span>
        <span className="lg:px-5 px-4 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          {findData?.strIngredient7}
        </span>
      </div>
    </div>
  );
}

export default RightMainContent;
