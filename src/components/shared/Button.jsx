export default function Button({ children, handleClick }) {
  return (
    <button
      onClick={() => handleClick()}
      className={` inline-block ${
        children === "Next Step" || children === "Confirm"
          ? "dark_Marine text-white"
          : " bg-transparent text-gray-400"
      } text-sm  self-end w-[6rem] rounded-md py-[0.5rem] `}
    >
      {children}
    </button>
  );
}
