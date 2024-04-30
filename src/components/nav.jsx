import React, { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

function Nav() {
  const [theme, setTheme] = useState("light");
  function setThemeChange() {
    document.documentElement.classList.toggle("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  

  return (
    <div className="w-full h-20 dark:bg-[#222831] shadow-md flex justify-between px-2 lg:px-10 py-2 items-center">
      <div className="flex">
        <img
          className="w-28 h-16 bg"
          src="https://cdn.worldvectorlogo.com/logos/food-2.svg"
          alt=""
        />
        <div className="flex dark:text-white flex-col gap-2">
          <span className="text-2xl font-medium">Kabul Food</span>
          <p className="text-sm">Hundreds of flavors under on roof...</p>
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
