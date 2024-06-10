import { useState } from "react";
import "./App.css";

import { FormInput, FormItem } from "./Components/Index";
import { TodoProvider } from "./Context/Index";

function App() {
  const [Todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pre) => {
      setTodos([...pre, { id: Data.now(), ...todo }]);
    });
  };
  addTodo();
  return (
    <>
      <TodoProvider
      // value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="container text-white  bg-blue-600 w-[100vw] h-[100vh] relative">
          <div className="absolute inset-0 mx-auto text-center mt-20">
            <h1 className="font-bold text-5xl">Manage Your Todo</h1>
            <FormInput />
            <FormItem />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
