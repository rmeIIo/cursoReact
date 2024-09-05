import { usePrevious } from "../hooks/usePrevious";
import { useState } from "react";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>CustomHook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar!</button>
      <hr />
    </div>
  );
};

export default HookCustom;
