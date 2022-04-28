import React from "react";
import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bounce}></div>
      <div className={classes.bounce2}></div>
      <div className={classes.bounce3}></div>
      <div className={classes.bounce4}></div>
    </div>
  );
};

export default Loading;
