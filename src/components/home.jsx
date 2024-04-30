import React from "react";
import Nav from "./nav";
import Main from "./main";

function Home() {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="h-[90vh] px-16 bg-center w-full dark:bg-dark bg-light bg-cover bg-no-repeat flex justify-start items-center">
      </div>
      <Main />
    </div>
  );
}

export default Home;
