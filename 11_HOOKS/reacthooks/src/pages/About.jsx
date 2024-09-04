import React from 'react'
import { useContext } from "react";
import { someContext } from "../components/HookUseContext";

const About = () => {
  const {contextValue} = useContext(someContext);

  return (
    <div>
      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
    </div>
  )
}

export default About