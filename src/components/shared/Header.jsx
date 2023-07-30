export default function Header({ head, subHead }) {
  return (
    <header className="flex flex-col gap-[0.5rem] ">
      <h1 className=" dark_Marine_text font-semibold text-3xl">{head}</h1>
      <small className=" text-gray-400">{subHead}</small>
    </header>
  );
}
