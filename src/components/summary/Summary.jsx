import Button from "../shared/Button";
import Header from "./../shared/Header";

export default function Summary({ userData, handlePreviousClick }) {
  return (
    <section className=" text-sm flex flex-col gap-[2rem] pt-[2rem] pr-[5rem] h-[100%] w-[100%] ">
      <Header
        head={"Finishing up"}
        subHead={"Double-check everythong looks OK before confirming."}
      />
      <main className=" flex flex-col gap-[1.5rem]">
        <ul className=" flex flex-col gap-[1rem] bg-purple-100 rounded-lg px-[1rem] py-[1rem] w-full">
          <li className=" pb-[1rem] border-b border-gray-400 flex justify-between ">
            <p className=" flex flex-col text-purple-950 font-semibold">
              Arcade (Monthly){" "}
              <span>
                <a href="#">change</a>
              </span>
            </p>
            <p className=" font-semibold">$9/mo</p>
          </li>
          <li className=" flex justify-between">
            <p>Online service</p> <p className=" font-medium">$1/mo</p>
          </li>
          <li className=" flex justify-between">
            <p>Larger storage</p> <p className=" font-medium">$2/mo</p>
          </li>
        </ul>
        <div className=" flex justify-between px-[.5rem]">
          <p>Total (per month)</p>
          <p className=" text-purple-900 font-bold">+12/mo</p>
        </div>
      </main>
      <footer className=" flex mt-[2.6rem] justify-between  text-center w-[100%]  ">
        <Button handleClick={handlePreviousClick}>Go Back</Button>
        {/* <Button handleClick={handleNextClick}>Next Step</Button> */}
      </footer>
    </section>
  );
}
