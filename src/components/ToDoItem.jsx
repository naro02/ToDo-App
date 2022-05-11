import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem(props) {
  return (
    <div className="todoBox">
      <li>{props.text}</li>
      <DeleteIcon className="todoBoxDelete" color="secondary" onClick={() => {
        props.onChecked(props.id);
      }} />
    </div>
  );
}

export default ToDoItem;
