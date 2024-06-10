import { useState, useEffect } from "react";
import "./App.css";
import { FormInput, FormItem } from "./Components/Index";
import { TodoProvider } from "./Context/Index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pre) => [...pre, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((pre) => {
      pre.map((item) => { item.id === id ? todo : item })
    })
  }
  const deleteTodo = (id) => {
    setTodos((pre) => {
      pre.filter((item) => item.id !== id);
    })
  }

  const toggleComplete = (id) => {
    setTodos((pre) => {
      pre.map(pre => {
        pre.id === id ? { ...pre, isComplete: !pre.isComplete } : pre;
      })
    })
  }

  // useEffect(() => {
  //   const todo = JSON.parse(localStorage.getItem("todo"));
  //   if (todo && todo.length > 0) {
  //     setTodos(todo);
  //   }
  // }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="container text-white  bg-blue-600 w-[100vw] h-[100vh] relative">
          <div className="absolute inset-0 mx-auto text-center mt-20">
            <h1 className="font-bold text-5xl">Manage Your Todo</h1>
            <FormInput />
            {todos.map((todo) => {
              <div key={todo.id} className="w-full"  >
                <FormItem todo={todo} />
              </div>
            })}

          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
