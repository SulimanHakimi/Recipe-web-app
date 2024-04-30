import React, { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

function Nav() {
  const [theme, setTheme] = useState("light");
  function setThemeChange() {
    document.documentElement.classList.toggle("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  

  return (
    <div className="w-full h-20 dark:bg-[#222831] shadow-md flex justify-between lg:px-10 py-2 items-center">
      <div className="flex items-center">
        <img
          className="lg:w-28 lg:h-16 w-20 h-10"
          src="https://cdn.worldvectorlogo.com/logos/food-2.svg"
          alt=""
        />
        <div className="flex dark:text-white flex-col gap-2">
          <span className="lg:text-2xl text-lg font-medium">Kabul Food</span>
          <p className="lg:text-sm text-xs">Hundreds of flavors under on roof...</p>
        </div>
      </div>

      <div>
        {theme === "dark" ? (
          <CiLight
            onClick={setThemeChange}
            className="cursor-pointer"
            size={"2.5em"}
            color="white"
          />
        ) : (
          <CiDark
            onClick={setThemeChange}
            className="cursor-pointer"
            size={"2.5em"}
            color="black"
          />
        )}
      </div>
    </div>
  );
}

export default Nav;
