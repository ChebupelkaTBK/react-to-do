import { useState } from "react";
import "./App.css";
import { useTasksStore } from "./store/Store";

export default function App() {
  const tasks = useTasksStore((state) => state.tasks);
  const addTasks = useTasksStore((state) => state.addTask);
  const removeTask = useTasksStore((state) => state.removeTask);
  const taskTogle = useTasksStore((state) => state.taskTogle);

  const [inputValue, setInputValue] = useState<string>("");
  return (
    <>
      <div className="classCentered">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button
          onClick={() => {
            addTasks(inputValue);
            setInputValue("");
          }}
        >
          добавить
        </button>
        {tasks.length === 0 && <p>пусто</p>}
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.text}
                <button onClick={() => removeTask(task.id)}>удалить</button>
                <button onClick={() => taskTogle(task.id)}>
                  {task.done === false ? "не выполнено" : "выполнено"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
