import React from "react";

function Today({ icon, temperature, weather }) {
  return (
    <>
      <div className="flex justify-center items-center rounded-[5px] bg-[#edf5fb] w-[98%] h-[35vh]">
        <div className=" h-[20vh] w-[40%] flex flex-col justify-evenly items-center">
          <h1 className="cursor-pointer font-[200] lg:font-[200] font-semibold text-[7vw] lg:text-[2vw]">
            Today
          </h1>
          <div className="flex items-center items-center justify-evenly w-full h-full  ">
            <img
              className="w-28 h-28"
              src={`https://cdn.aerisapi.com/wxicons/v2/${icon}`}
              alt="weather-icon"
            />
            <div className="flex flex-col items-center ">
              <h1 className=" text-[4vw] lg:text-[2.50vw] font-bold">
                {temperature}&#x2109;
              </h1>
              <h1 className=" font-[200] text-[4vw] lg:text-[1.40vw]">
                {weather}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Today;
