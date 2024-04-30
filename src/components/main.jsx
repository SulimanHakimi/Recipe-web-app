import Card from "./card";
import RightMainContent from "./rightMainContent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [mealData, setMealData] = useState();
  const [inpValue, setInpValue] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Salad`)
      .then((res) => {
        setMealData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center lg:flex-row flex-col md:items-center border-t dark:bg-[#222831] items-start">
      <div className="left-side w-full lg:w-1/2 flex md:min-h-[70vh]  flex-col justify-start items-center">
        <div className="nav-search w-full h-32  flex items-center justify-center">
          <input
            type="text"
            onChange={(e) => {
              setInpValue(e.target.value);
            }}
            className="outline-none  w-4/6 md:w-3/6 shadow-lg border-black border-r-0 px-5 py-3 rounded-l-3xl"
            name=""
            id=""
          />
          <button className="py-3 dark:bg-[#1c2129]  border-black shadow-lg px-5 rounded-r-3xl dark:text-white">
            Search
          </button>
        </div>
        <div className="cards gap-5 content-start md:content-center grid-cols-2 grid md:grid-cols-3 lg:grid-cols-3 py-5 px-4">
          {mealData?.meals?.map((item) => (
            <Card
              key={item.idMeal}
              name={item.strMeal}
              youtube={item.strYoutube}
              image={item.strMealThumb}
              des={item.strInstructions}
            />
          ))}
        </div>
      </div>
      <RightMainContent key={1} data={mealData} />
    </div>
  );
}

export default Main;
