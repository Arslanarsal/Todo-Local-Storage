function FormInput() {
  return (
    <>
      <form className="mt-10">
        <input
          className="w-[33%] text-black px-4 py-2 rounded-l-lg outline-none  "
          placeholder="Write Todo..."
          type="text"
        />
        <button className=" bg-green-600 font-bold px-4 py-2 rounded-r-lg shrink-0">
          ADD
        </button>
      </form>
    </>
  );
}

export default FormInput;
