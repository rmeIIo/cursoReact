import React from "react";
import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTasks = [
    { id: 1, title: "Estudar React" },
    { id: 2, title: "Estudar Node" },
    { id: 3, title: "Estudar React Native" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          title: taskText,
        };

        setTaskText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTask({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTask({ type: "DELETE", id });
  }

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>

      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />

        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.title}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
