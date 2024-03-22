import { useState } from "react";
import "./App.css";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

function App() {
  const [light, setLight] = useState(false);
  const toogleLight = () => {
    setLight(!light);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        {light ? (
          <FaRegLightbulb className="text-9xl "></FaRegLightbulb>
        ) : (
          <FaLightbulb className="text-9xl text-yellow-500"></FaLightbulb>
        )}

        <button
          className="bg-slate-500 p-2 rounded-md text-white"
          onClick={() => toogleLight()}
        >
          Prender Foco
        </button>
      </div>
    </>
  );
}

export default App;
