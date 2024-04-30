import React from "react";
import styles from "../styles/card.module.css"
function Card(data) {

  return (
    <div
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
      }}
      className={`${styles.card} lg:w-[15vw] md:w-[30vw] w-[45vw] dark:text-white cursor-pointer overflow-hidden h-[45vh] lg:h-[35vh] bg-slate-300 shadow-md flex rounded-lg`}
    >
      <div className={`${styles.content} hover:backdrop-blur-sm min-h-full hidden justify-end flex-col p-2`}>
        <span className="lg:text-sm  font-bold">{data.name}</span>
        <p className="lg:text-xs text-sm text-ellipsis overflow-hidden line-clamp-4">
          {
            data.des
          }
        </p>
      </div>
    </div>
  );
}

export default Card;
