import React from "react";
import classes from "./TodoElement.module.css"

const TodoElement: React.FC<{ text: string; onDeleteToDo: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.onDeleteToDo}>{props.text}</li>;
};

export default TodoElement;
