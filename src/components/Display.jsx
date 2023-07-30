import { useState } from "react";
import PersonalContent from "./personal/PersonalContent";
import PlanContent from "./plan/PlanContent";
import SideBar from "./shared/SideBar";
import AddonContent from "./add-ons/AddonContent";
import Summary from "./summary/Summary";

export default function Display() {
  const [order, setOrder] = useState(1);

  function handleNextClick() {
    setOrder((order) => order + 1);
  }
  function handlePreviousClick() {
    setOrder((order) => order - 1);
  }
  function handleConfirmClick() {
    window.alert("Your application has been submitted");
  }
  // function pages() {}

  return (
    <main className=" main_back w-[100vw] h-[100vh] flex justify-center items-center">
      <section className=" grid grid-cols-[30%_60%] gap-[10%] w-[55%] h-[32rem] bg-white px-[0.7rem] py-[.7rem] rounded-xl">
        <SideBar order={order} onSetOrder={setOrder} />
        {order === 1 && <PersonalContent handleNextClick={handleNextClick} />}
        {order === 2 && (
          <PlanContent
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
          />
        )}

        {order === 3 && (
          <AddonContent
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
          />
        )}

        {order === 4 && <Summary handleConfirmClick={handleConfirmClick} />}
      </section>
    </main>
  );
}
