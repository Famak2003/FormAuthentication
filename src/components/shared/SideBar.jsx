const data = [
  { step: 1, info: "YOUR INFO" },
  { step: 2, info: "SELECT PLAN" },
  { step: 3, info: "ADD-ONS" },
  { step: 4, info: "SUMMARY" },
];

// ------- Sidebar ----------

export default function SideBar({ order, onSetOrder }) {
  return (
    <section className=" text-xs px-[2rem] py-[2rem] rounded-xl ring-1 ring-black desktop_side_bg h-[100%]">
      <ul className=" flex flex-col gap-[1.5rem]  ">
        {data.map((item, id) => (
          <Information
            onSetOrder={onSetOrder}
            order={order}
            num={id}
            key={id}
            step={item.step}
          >
            {item.info}
          </Information>
        ))}
      </ul>
    </section>
  );
}
function Information({ order, onSetOrder, step, num, children }) {
  let newNum = num + 1;
  return (
    <li
      className=" flex gap-[1rem]"
      onClick={() => onSetOrder((order) => (order = step))}
    >
      <div
        className={`active:text-black active:bg-stone-600 ring-1 ring-slate-300 duration-300 rounded-full w-[2rem] flex justify-center items-center text-white ${
          newNum === order ? "bg-stone-300 text-black" : ""
        } `}
      >
        {newNum}
      </div>
      <div className=" flex flex-col">
        <span className=" text-gray-400">{`STEP ${step}`}</span>
        <h2 className=" font-semibold text-white">{children}</h2>
      </div>
    </li>
  );
}
