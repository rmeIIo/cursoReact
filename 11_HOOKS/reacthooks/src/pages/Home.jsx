import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <hr />
      <HookUseReducer />
    </div>
  );
};

export default Home;
