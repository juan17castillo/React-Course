import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // console.log("Training");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] UseEffect");
    };
  }, []);

  const asignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    asignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    asignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>|  
      <h1>{props.title}</h1>
      <p className={asignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);
