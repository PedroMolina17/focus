import { useState } from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
const Lights = () => {
  const [light, setLight] = useState(false);

  const toggleLight = () => {
    setLight(!light);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10 bg-black">
        <div
          className={`text-9xl ${light ? "text-white" : "text-yellow-500"} ${
            light ? "" : "shadow-outline-yellow"
          }`}
          style={light ? {} : { filter: "drop-shadow(0 0 0.75rem yellow)" }}
        >
          {light ? <FaRegLightbulb /> : <FaLightbulb />}
        </div>

        <button
          className="bg-slate-500 p-2 rounded-md text-white"
          onClick={toggleLight}
        >
          Prender Foco
        </button>
      </div>
    </>
  );
};

export default Lights;
