import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import { useContext } from "react";
import { someContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  const {contextValue} = useContext(someContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />

      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />

      <HookUseRef />
    </div>
  );
};

export default Home;
