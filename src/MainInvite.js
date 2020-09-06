import React from "react";
import css from "./App.module.scss";
import first from "./assets/first-page.jpeg";

function MainInvite({ name }) {
  return (
    <div className={css.inviteContainer}>
      <img src={first} />
      <p className={css.userName}>{name}</p>
    </div>
  );
}

export default MainInvite;
