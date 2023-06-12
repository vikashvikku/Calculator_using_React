import "./Calculations.css";

const Calculations = ({ val, handleValue, clearBtn }) => {
  const signs = ["+", "-", "*", "/", "%"];
  const handleDigit = (digit) => {
    if (
      (signs.includes(val[val.length - 1]) &&
        (digit === "0" || signs.includes(digit))) ||
      (val[val.length - 1] === "." && digit === ".")
    ) {
      handleValue(val);
    } else if (val === "" && digit === "0") {
      handleValue(val);
    } else handleValue(val.concat(digit));
  };

  const handleEqual = () => {
    handleValue(String(eval(val)));
  };
  const handleToggle = () => {
    if (val.includes("(")) {
      handleValue(val.concat(")"));
    } else if (val === "") {
      handleValue(val.concat("("));
    } else {
      handleValue(val.concat("*("));
    }
  };
  const handleTogglePlusMinus = () => {
    if (val[0] === "-") {
      handleValue(val);
    } else {
      handleValue(val.concat("-"));
    }
  };

  return (
    <>
      <div className="output">
        {/* Output Field */}

        <p>{val}</p>
      </div>

      {/* Container for handling buttons */}

      <div className="calc">
        {/* Container - 1 */}

        <div className="cont-1">
          <button className="item clear" onClick={clearBtn}>
            C
          </button>
          <button className="item cal" onClick={() => handleToggle()}>
            ( )
          </button>
          <button className="item cal" onClick={() => handleDigit("%")}>
            %
          </button>
          <button className="item cal" onClick={() => handleDigit("/")}>
            ÷
          </button>
        </div>

        {/* Container 2 */}

        <div className="cont-2">
          <button className="item" onClick={() => handleDigit("7")}>
            7
          </button>
          <button className="item" onClick={() => handleDigit("8")}>
            8
          </button>
          <button className="item" onClick={() => handleDigit("9")}>
            9
          </button>
          <button className="item cal" onClick={() => handleDigit("*")}>
            x
          </button>
        </div>

        {/* Container 3 */}

        <div className="cont-3">
          <button className="item" onClick={() => handleDigit("4")}>
            4
          </button>
          <button className="item" onClick={() => handleDigit("5")}>
            5
          </button>
          <button className="item" onClick={() => handleDigit("6")}>
            6
          </button>
          <button className="item cal" onClick={() => handleDigit("-")}>
            —
          </button>
        </div>

        {/* Container 4 */}

        <div className="cont-4">
          <button className="item" onClick={() => handleDigit("1")}>
            1
          </button>
          <button className="item" onClick={() => handleDigit("2")}>
            2
          </button>
          <button className="item" onClick={() => handleDigit("3")}>
            3
          </button>
          <button className="item cal" onClick={() => handleDigit("+")}>
            +
          </button>
        </div>

        {/* Container 5 */}

        <div className="cont-5">
          <button className="item" onClick={() => handleTogglePlusMinus()}>
            +/-
          </button>
          <button className="item" onClick={() => handleDigit("0")}>
            0
          </button>
          <button className="item" onClick={() => handleDigit(".")}>
            .
          </button>
          <button className="item cal equal" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculations;
