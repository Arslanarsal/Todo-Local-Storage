import { useState } from "react";
import { useTodo } from "../Context/Index"

function FormInput() {
  const [todo, settodo] = useState("");
  const { addTodo } = useTodo();

  const Add = () => {
    if (todo.length > 0) {

      addTodo({ todo, isComplete: false });
      settodo("");
    } 
  }

  return (
    <>
      <form onSubmit={Add} className="mt-10">
        <input
          className="w-[33%] text-black px-4 py-2 rounded-l-lg outline-none  "
          placeholder="Write Todo..."
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button type="submit" className=" bg-green-600 font-bold px-4 py-2 rounded-r-lg shrink-0">
          ADD
        </button>
      </form>
    </>
  );
}

export default FormInput;
