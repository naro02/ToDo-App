import React, { useState } from "react";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <div className="add-button">
      <AddCircleSharpIcon
        sx={{ fontSize: 40 }}
        color="secondary"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      />
      </div>
    </div >
  );
}

export default InputArea;
