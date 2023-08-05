import arcade from "./../../assets/images/icon-arcade.svg";
import advanced from "./../../assets/images/icon-advanced.svg";
import pro from "./../../assets/images/icon-pro.svg";

import Button from "./../shared/Button";
import Header from "./../shared/Header";
import { useEffect, useState } from "react";
import Switch from "../Switch/Switch";

// images
const images = [{ arcade }, { advanced }, { pro }];

// Page content
const yearlyData = [
  { name: "Arcade", price: "90", bonus: "2 months free" },
  {
    name: "Advanced",
    price: "120",
    bonus: "2 months free",
  },
  { name: "Pro", price: "150", bonus: "2 months free" },
];

const monthlyData = [
  { name: "Arcade", price: "9" },
  {
    name: "Advanced",
    price: "12",
  },
  { name: "Pro", price: "15" },
];

export default function PlanContent({
  handleNextClick,
  handlePreviousClick,
  setUserData,
  userData,
}) {
  // const [planOfChoice, setPlanOfChoice] = useState("");

  const [data, setData] = useState(monthlyData);
  const [getToggle, setGetToggle] = useState(false);
  const [selectedPlanCard, setSelectedPlanCard] = useState(null);

  useEffect(() => {
    if (getToggle) {
      setData(yearlyData);
    } else {
      setData(monthlyData);
    }
  }, [getToggle]);

  useEffect(() => {
    setUserData((prev) => {
      return {
        ...prev,
        plan: `${data[selectedPlanCard]?.name || ""}-${
          data[selectedPlanCard]?.price || ""
        }/${
          selectedPlanCard === 0 || selectedPlanCard
            ? getToggle
              ? "yr"
              : "mo"
            : ""
        }`,
      };
    });
  }, [selectedPlanCard, data, getToggle, setUserData]);

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
              bonus={item.bonus || ""}
              duration={getToggle ? "yr" : "mo"}
              selectedPlanCard={selectedPlanCard}
              setSelectedPlanCard={setSelectedPlanCard}
            />
          ))}
        </ul>
        <div className=" flex gap-[1rem] items-center bg-gray-200 py-[.4rem] rounded-lg justify-center w-[100%]">
          <p>Monthly</p>
          <Switch setGetToggle={setGetToggle} />
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

// Plan card
function PlanCard(props) {
  const {
    num,
    name,
    price,
    bonus,
    duration,
    selectedPlanCard,
    setSelectedPlanCard,
  } = props;

  // Mapping the correct image with their 'num' or id
  const imageSelector = (imgs) => {
    return imgs[num];
  };
  const image = Object.values(imageSelector(images));

  return (
    <li
      onClick={() => setSelectedPlanCard(num)}
      className={`Ball flex flex-col gap-[2rem] h-fit px-[.7rem] py-[1rem] w-[32%] rounded-lg ${
        selectedPlanCard === num
          ? "ring-1 ring-purple-600 bg-purple-100"
          : "ring-1 ring-gray-300 bg-white"
      }`}
    >
      <img className=" w-[2.5rem]" src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>
          {price}/{duration}
        </p>
        {bonus && <small>{bonus}</small>}
      </div>
    </li>
  );
}
