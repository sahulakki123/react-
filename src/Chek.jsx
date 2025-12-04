import React, { useState } from "react";


const ColorCheckbox = () => {
  const [color, setColor] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkbox se Color Change</h2>

      <label>
        <input type="checkbox" onChange={() => setColor("red")} checked={color === "red"}/>
        Red
      </label>

      <br />

      <label>
        <input type="checkbox" onChange={() => setColor("yellow")} checked={color === "yellow"}/>
        Yellow
      </label>

      <div
        style={{ marginTop: "20px", height: "150px",width: "150px",border: "2px solid black",backgroundColor: color,}}>
            
    </div>
    </div>
  );
};

export default ColorCheckbox;
