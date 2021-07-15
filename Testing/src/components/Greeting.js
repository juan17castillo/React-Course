import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const changeTextHandler = () => {
    setTextChanged(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!textChanged && <Output>Without changes</Output>}
      {textChanged && <Output>Text has been changed</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
};

export default Greeting;
