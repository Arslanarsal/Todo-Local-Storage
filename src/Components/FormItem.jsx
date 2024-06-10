import { useState } from "react";
import { useTodo } from "../Context/Index"


function FormItem({ todo }) {

  const { toggleComplete, updateTodo, deleteTodo } = useTodo();

  const [isEditAble, setisEditAble] = useState(false);
  const [todomsg, settodomsg] = useState("");

  const toggle = () => {
    toggleComplete(todo.id);
  }

  const update = () => {
    updateTodo(todo.id, todomsg)
  }

  const del = () => {
    deleteTodo(todo.id);
  }


  return (
    <>
      <div className={` inline-flex items-center w-[38%] gap-2 mt-6 ${todo.isComplete ? "border-black/10 px-2" : "border-transparent"}  ${todo.isComplete ? "line-through" : ""}  px-3 py-2`}>
        <input value={todo.isComplete} onChange={toggle} type="checkbox" name="" id="" />


        <input
          className="w-full px-4 py-2 outline-none bg-fuchsia-800"
          type="text"
          value={todomsg}
          onChange={(e) => { settodomsg(e.target.value) }}
          readOnly={!isEditAble}
        />


        <button onClick={
          () => {
            if (todo.isComplete) {
              return;
            }
            if (!isEditAble) {
              setisEditAble((pre) => !pre)
            } else {
              update();
            }
          }
        } disabled={todo.isComplete}
          className="bg-white  text-black rounded-lg h-8 w-8 flex items-center justify-center">
          {isEditAble ? "📁" : "✏️"}
        </button>
        <button onClick={del} className="bg-white text-black rounded-lg h-8 w-8 flex items-center justify-center">
          EDIT
        </button>
      </div>
    </>
  );
}

export default FormItem;
