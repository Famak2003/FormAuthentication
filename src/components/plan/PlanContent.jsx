import arcade from "./../../assets/images/icon-arcade.svg";
import advanced from "./../../assets/images/icon-advanced.svg";
import pro from "./../../assets/images/icon-pro.svg";

import Button from "./../shared/Button";
import Header from "./../shared/Header";

const images = [{ arcade }, { advanced }, { pro }];

const data = [
  { name: "Arcade", price: "90/yr", bonus: "2 months free" },
  {
    name: "Advanced",
    price: "120/yr",
    bonus: "2 months free",
  },
  { name: "Pro", price: "150/yr", bonus: "2 months free" },
];

export default function PlanContent({ handleNextClick, handlePreviousClick }) {
  return (
    <section className=" text-sm flex flex-col gap-[2rem] pt-[2rem] pr-[5rem] h-[100%] w-[100%]  ">
      <Header
        head={"Select your plan"}
        subHead={"You have the option of monthly or yearly billing."}
      />
      <main className=" w-[100%] flex flex-col gap-[2rem] ">
        <ul className=" flex gap-[4%] w-[100%] ">
          {data.map((item, id) => (
            <PlanCard
              num={id}
              key={item.name}
              name={item.name}
              price={item.price}
              bonus={item.bonus}
            />
          ))}
        </ul>
        <div className=" flex gap-[1rem] bg-gray-200 py-[.4rem] rounded-lg justify-center w-[100%]">
          <p>Monthly</p>
          <input type="checkbox" className=" w-[1rem] accent-purple-600" />
          <p className="dark_Marine_text">Yearly</p>
        </div>
      </main>
      <footer className=" flex mt-[2.6rem] justify-between  text-center w-[100%]  ">
        <Button handleClick={handlePreviousClick}>Go Back</Button>
        <Button handleClick={handleNextClick}>Next Step</Button>
      </footer>
    </section>
  );
}

// The plan card
function PlanCard(props) {
  const { num, name, price, bonus } = props;

  // Mapping the correct image with their 'num' or id
  const imageSelector = (imgs) => {
    return imgs[num];
  };
  const image = Object.values(imageSelector(images));

  return (
    <li className=" flex flex-col gap-[20%] h-[10rem] px-[.7rem] py-[1rem] w-[32%]  rounded-lg ring-1 ring-gray-500 active:ring-purple-800">
      <img className=" w-[2.5rem]" src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <small>{bonus}</small>
      </div>
    </li>
  );
}
