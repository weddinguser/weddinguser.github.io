import React, { useCallback, useState } from "react";
import css from "./App.module.scss";
import logo from "./assets/logo.jpeg";
import second from "./assets/second-page.jpeg";
import MainInvite from "./MainInvite";

const toCapitalizeFirstChar = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const getInviteName = (username) => {
  if (!username) return "Дорогой гость!";
  try {
    const names = username.split("-");
    return names
      .map((n, i) => (i === 0 ? toCapitalizeFirstChar(n) : n))
      .join(" ");
  } catch (e) {
    return "Дорогой гость!";
  }
};

function App({ match }) {
  const [step, setStep] = useState(1);

  const username = getInviteName(match.params.username);
  const nextStep = useCallback(() => setStep((s) => s + 1), []);

  return (
    <div className={css.container} onClick={nextStep}>
      {step === 1 && <img className={css.image} src={logo} />}
      {step === 2 && <MainInvite name={username} />}
      {step >= 3 && <img src={second} />}
    </div>
  );
}

export default App;
