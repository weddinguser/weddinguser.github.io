import React, { useCallback, useState } from "react";
import css from "./App.module.scss";
import logo from "./assets/logo.jpeg";
import first from "./assets/first-page.jpeg";
import second from "./assets/second-page.jpeg";

function App() {
  const [step, setStep] = useState(1);
  const nextStep = useCallback(() => setStep((s) => s + 1), []);
  return (
    <div className={css.container} onClick={nextStep}>
      {step === 1 && <img className={css.image} src={logo} />}
      {step === 2 && <img src={first} />}
      {step >= 3 && <img src={second} />}
    </div>
  );
}

export default App;
