import React from "react";
import { useState } from "react";
import Select from "./components/Select"; 
import Square from "./components/Square";

const App = () => {
  const options = [
    { value: "red", text: "Red" },
    { value: "yellow", text: "Yellow" },
    { value: "green", text: "Green" },
    { value: "blue", text: "Blue" },
    
  ];
  const [value, setValue] = useState("");
  const changeHandler = (event) => {
    setValue(event.target.value);
    document.getElementById("msquare").style.backgroundColor =
      event.target.value;
  };
  return (
    <div>
      <Select value={value} onChange={changeHandler} options={options} />
      <Square />
    </div>
  );
};

export default App;

