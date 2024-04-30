import React from "react";

function RightMainContent(data) {
  console.log(data)
  return (
    <div className="right-side w-full justify-start gap-5 lg:w-1/2 p-4 min-h-screen dark:bg-[#222831] dark:text-white flex flex-col lg:justify-between lg:gap-2 self-start items-start">
      <video className="w-full rounded h-60" controls autoPlay>
        <source
          src="https://youtu.be/fnc_krWZ_SA?si=CJw5tNpSQXd3GbOb"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h1 className="p-0 m-0 text-2xl font-semibold">
        Har yaw gham ba darna lar kram || za ba dumra meena darkam ||
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque
        cum voluptatem nihil autem deleniti dolore nam aut earum, delectus vero
        doloremque mollitia asperiores neque placeat hic officia. Laboriosam
        dolorem consequatur nisi inventore, optio voluptas beatae minus magnam
        aperiam porro eaque molestias ratione aliquid? Ullam soluta reiciendis
        unde. Velit, ab?
      </p>

      <div className="self-start flex-wrap flex gap-2">
        <span className="px-5 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          orange
        </span>
        <span className="px-5 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          lemo
        </span>
        <span className="px-5 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          rice
        </span>
        <span className="px-5 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          ppmoe
        </span>
        <span className="px-5 py-2 text-sm rounded-full border dark:bg-[#101318] dark:border-none bg-white text-black dark:text-white">
          Mogewx
        </span>
      </div>
    </div>
  );
}

export default RightMainContent;
