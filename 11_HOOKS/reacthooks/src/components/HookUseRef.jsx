import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current++;
  })

  return (
    <div>
      <h2>useRef</h2>

      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter A: {counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Contador A
      </button>

      <p>Counter B: {counterB}</p>

      <button
        onClick={() => {
          setCounterB(counterB + 1);
        }}
      >
        Contador B
      </button>

      <hr />
    </div>
  );
};

export default HookUseRef;
