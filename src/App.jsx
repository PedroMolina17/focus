import { useState } from "react";
import "./App.css";

function App() {
  const [light, setLight] = useState(false);
  const toogleLight = () => {
    setLight(!light);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {light ? (
          <img
            src="https://images.emojiterra.com/openmoji/v13.1/512px/1f4a1.png"
            alt="foco"
            width={900}
            height={900}
          ></img>
        ) : (
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/1024px/1f4a1.png"
            alt="foco"
            width={900}
            height={900}
          ></img>
        )}

        <button
          className="bg-slate-600 p-2 rounded-md"
          onClick={() => toogleLight()}
        >
          Prender Foco
        </button>
      </div>
    </>
  );
}

export default App;
