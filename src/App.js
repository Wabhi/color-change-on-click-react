import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [style, setStyle] = useState("cont");

  const changeStyle = () => {
    setStyle("cont2");
  };
  console.log(style);
  return (
    <>
      <div className="App">CHANGE CSS STYLING WITH ONCLICK EVENT</div>
      <div className={style === "cont" ? "cont2" : "cont"}>
        <button className="button" onClick={changeStyle}>
          Click me!
        </button>
      </div>
    </>
  );
};
export default App;
