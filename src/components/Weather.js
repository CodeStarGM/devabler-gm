import React, { memo } from "react";
import Today from "./Today";
import Day from "./Day";
function Weather({ city }) {
  return (
    <>
      {/* weather forcast */}
      <div className="shadow-2xl flex flex-col justify-evenly items-center rounded-[10px] mt-[2%] bg-white w-[95%] h-[80%]">
        {/* today */}
        {city.slice(0, 1).map((today, index) => {
          return (
            <Today
              key={index}
              icon={today.icon}
              temperature={today.maxTempF}
              weather={today.weather}
            />
          );
        })}

        {/* today */}
        {/* day */}
        <div className="flex items-center justify-between w-[98%] h-[26vh]">
          {city.slice(1, 5).map((day, index) => {
            var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var d = new Date(day.dateTimeISO);
            var dayName = days[d.getDay()];

            return (
              <Day
                key={index}
                day={dayName}
                icon={day.icon}
                temperature={day.maxTempF}
              />
            );
          })}
        </div>
        {/* day */}
      </div>
      {/* weather forcast */}
    </>
  );
}

export default memo(Weather);
