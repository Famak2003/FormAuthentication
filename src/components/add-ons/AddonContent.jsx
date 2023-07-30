import Button from "../shared/Button";
import Header from "./../shared/Header";

const data = [
  { title: "Online service", info: "Aceess to multiplayer games", price: "10" },
  { title: "Larger storage", info: "Extra 1TB of cloud save", price: "20" },
  {
    title: "Customizable profile",
    info: "Custom theme on your profile",
    price: "20",
  },
];

export default function AddonContent({ handleNextClick, handlePreviousClick }) {
  return (
    <section className=" text-sm flex flex-col gap-[2rem] pt-[2rem] pr-[5rem] h-[100%] w-[100%] ">
      <Header
        head={"Pick add-ons"}
        subHead={"Add-ons help enhance your gaming experience."}
      />
      <main className=" w-[100%]">
        <ul className="flex flex-col gap-[1rem]">
          {data.map((item) => (
            <Addons
              title={item.title}
              info={item.info}
              price={item.price}
              key={item.title}
            />
          ))}
        </ul>
      </main>
      <footer className=" flex mt-[2.6rem] justify-between  text-center w-[100%]  ">
        <Button handleClick={handlePreviousClick}>Go Back</Button>
        <Button handleClick={handleNextClick}>Next Step</Button>
      </footer>
    </section>
  );
}

function Addons(props) {
  const { title, info, price } = props;
  return (
    <li className=" w-[100%] rounded-lg ring-1 ring-gray-500 active:ring-purple-800 flex justify-between items-center h-[4rem] px-[1.2rem]  ">
      <div className=" flex gap-[1rem]">
        <input
          className=" accent-blue-500 "
          type="checkbox"
          //   onClick={(e) => console.log(e.target.value)}
        />
        <div>
          <h3 className=" font-bold">{title}</h3>
          <p className=" text-gray-400">{info}</p>
        </div>
      </div>

      <p className=" text-purple-600"> {`+$${price}/yr`} </p>
    </li>
  );
}
