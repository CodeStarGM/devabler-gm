import { useState, useEffect } from "react";

import "./App.css";

import Weather from "./components/Weather";

function App() {
  const [ottawa, setOttawa] = useState([]);
  const [moscow, setMoscow] = useState([]);
  const [tokyo, setTokyo] = useState([]);
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b73c7cc782msh121700fb4a7b65bp13c0d6jsn12c0607456f0",
      "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
    },
  };

  const GETAPI = (api) => {
    const call = fetch(api, options)
      .then((response) => response.json())
      .then((data) => {
        return data.response[0].periods;
      })
      .catch((err) => console.error(err));
    return call;
  };

  useEffect(() => {
    GETAPI(
      "https://aerisweather1.p.rapidapi.com/forecasts/Ottawa,Canada?from=2022-10-27&to=2022-11-33"
    ).then((res) => setOttawa(res));

    GETAPI(
      "https://aerisweather1.p.rapidapi.com/forecasts/Moscow,Russia?from=2022-10-27&to=2022-11-33"
    ).then((res) => setMoscow(res));

    GETAPI(
      "https://aerisweather1.p.rapidapi.com/forecasts/Tokyo,Japan?from=2022-10-27&to=2022-11-33"
    ).then((res) => setTokyo(res));
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#edf5fb]">
        <div className=" flex flex-col items-center w-[100vw] lg:w-[50vw] h-[80vh]">
          {/* tab */}
          <div className="flex justify-evenly items-center w-[100%] h-[10vh]">
            <h1
              onClick={() => {
                toggleTab(1);
              }}
              className={
                tab === 1
                  ? "cursor-pointer text-[4vw] lg:text-[1.80vw] text-[#5fa7eb] font-bold"
                  : "cursor-pointer text-[4vw] lg:text-[1.80vw]"
              }
            >
              OTTAWA
            </h1>
            <h1
              onClick={() => {
                toggleTab(2);
              }}
              className={
                tab === 2
                  ? "cursor-pointer text-[4vw] lg:text-[1.80vw] text-[#5fa7eb] font-bold"
                  : "cursor-pointer text-[4vw] lg:text-[1.80vw]"
              }
            >
              MOSCOW
            </h1>
            <h1
              onClick={() => {
                toggleTab(3);
              }}
              className={
                tab === 3
                  ? "cursor-pointer text-[4vw] lg:text-[1.80vw] text-[#5fa7eb] font-bold"
                  : "cursor-pointer text-[4vw] lg:text-[1.80vw]"
              }
            >
              TOKYO
            </h1>
          </div>
          {/* tab */}
          {tab === 1 ? <Weather city={ottawa} /> : null}
          {tab === 2 ? <Weather city={moscow} /> : null}
          {tab === 3 ? <Weather city={tokyo} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
