import { useEffect, useState } from "react";
import PersonalContent from "./personal/PersonalContent";
import PlanContent from "./plan/PlanContent";
import SideBar from "./shared/SideBar";
import AddonContent from "./add-ons/AddonContent";
import Summary from "./summary/Summary";

export default function Display() {
  const [order, setOrder] = useState(1);

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("myData")) || {
      username: "",
      email: "",

      phone: "",
      plan: "",
      addOn: [],
    },
  );

  // console.log(userData);

  useEffect(() => {
    // Storing userData into a localStorage to prevent data loss after reloading
    localStorage.setItem("myData", JSON.stringify(userData));
  }, [userData]);

  function handleNextClick() {
    setOrder((order) => order + 1);
  }
  function handlePreviousClick() {
    setOrder((order) => order - 1);
  }
  function handleConfirmClick() {
    window.alert("Your application has been submitted");
  }

  return (
    <main className=" main_back w-[100vw] h-[100vh] flex justify-center items-center">
      <section className=" grid grid-cols-[30%_60%] gap-[10%] w-[55%] max-w-[55rem] h-[32rem] bg-white px-[0.7rem] py-[.7rem] rounded-xl">
        <SideBar order={order} onSetOrder={setOrder} />
        {order === 1 && (
          <PersonalContent
            handleNextClick={handleNextClick}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        {order === 2 && (
          <PlanContent
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
            userData={userData}
            setUserData={setUserData}
          />
        )}

        {order === 3 && (
          <AddonContent
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
            userData={userData}
            setUserData={setUserData}
          />
        )}

        {order === 4 && (
          <Summary
            userData={userData}
            handlePreviousClick={handlePreviousClick}
            handleConfirmClick={handleConfirmClick}
          />
        )}
      </section>
    </main>
  );
}
