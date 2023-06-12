import { useState } from "react";
import "./App.css";
import Calculations from "./Calculations";

function App() {
  const [val, setVal] = useState("");

  const handleClear = () => {
    setVal("");
  };
  const handleValue = (value) => {
    setVal(value);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="App">
          <p className="calculator">Calculator</p>

          {/* Input Field */}

          <div className="field">{val}</div>
        </div>

        {/* Component*/}

        <Calculations
          val={val}
          clearBtn={handleClear}
          handleValue={handleValue}
        />
      </div>
    </div>
  );
}

export default App;
