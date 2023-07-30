// -------- Personal Body ---------
import { useState } from "react";
import Button from "./../shared/Button";
import Header from "./../shared/Header";

export default function PersonalContent({ handleNextClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const userInfo = () => {
    if (name === "" || email === "" || phone === "") return;
    const user = [{ ...name }, { ...email }, { ...phone }];
    console.log(user);
  };

  return (
    <section className=" flex flex-col gap-[2rem] pt-[2rem] pb-[1rem] w-[100%] h-[100%] pr-[5rem]   ">
      <Header
        head={"Personal info"}
        subHead={"Please provide your name, email address, and phone number"}
      />
      <form
        className="flex flex-col gap-[0.5rem] w-[100%]  "
        onSubmit={userInfo}
      >
        <label className=" dark_Marine_text">Name</label>
        <input
          className=" ring-1 ring-gray-400 rounded-lg w-[100%] px-[0.75rem] py-[0.5rem] text-sm text-gray-500"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g stephen king"
        />

        <label className=" dark_Marine_text">Email Address</label>
        <input
          className=" ring-1 ring-gray-400 rounded-lg w-[100%] px-[0.75rem] py-[0.5rem] text-sm text-gray-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g stephenking@gemail.com"
          required
        />

        <label className=" dark_Marine_text">Phone Number</label>
        <input
          className=" ring-1 ring-gray-400 rounded-lg w-[100%] px-[0.75rem] py-[0.5rem] text-sm text-gray-500"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="e.g +1 234 567 890"
        />
      </form>
      <footer className=" flex mt-[3rem] justify-end t-4  ">
        <Button handleClick={handleNextClick}>Next Step</Button>
      </footer>
    </section>
  );
}
