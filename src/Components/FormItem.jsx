function FormItem() {
  return (
    <>
      <div className=" inline-flex items-center w-[38%] gap-2 mt-6 bg-fuchsia-800 px-3 py-2">
        <input type="checkbox" name="" id="" />
        <input
          className="w-full px-4 py-2 outline-none bg-fuchsia-800"
          type="text"
        />
        <button className="bg-white  text-black rounded-lg h-8 w-8 flex items-center justify-center">
          EDIT
        </button>
        <button className="bg-white text-black rounded-lg h-8 w-8 flex items-center justify-center">
          EDIT
        </button>
      </div>
    </>
  );
}

export default FormItem;
