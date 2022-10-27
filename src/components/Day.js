import React, { memo } from "react";
function Day({ day, icon, temperature }) {
  return (
    <>
      <div className="flex justify-evenly items-center flex-col rounded-[5px] bg-[#edf5fb] w-[24%] h-[26vh]">
        <h1 className="cursor-pointer font-[200] text-[4vw] lg:text-[1.40vw]">
          {day}
        </h1>

        <img
          src={`https://cdn.aerisapi.com/wxicons/v2/${icon}`}
          alt="weather-icon"
        />

        <h1 className="cursor-pointer font-bold text-[4vw] lg:text-[1.40vw]">
          {temperature}&#x2109;
        </h1>
      </div>
    </>
  );
}

export default memo(Day);
