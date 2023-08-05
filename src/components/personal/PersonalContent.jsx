// -------- Personal Body ---------
// import { useState } from "react";
import Button from "./../shared/Button";
import Header from "./../shared/Header";

export default function PersonalContent({
  handleNextClick,
  userData,
  setUserData,
}) {
  // update formData onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <section className=" flex flex-col gap-[2rem] pt-[2rem] pb-[1rem] w-[100%] h-[100%] pr-[5rem]   ">
      <Header
        head={"Personal info"}
        subHead={"Please provide your name, email address, and phone number"}
      />
      <form
        id=" myForm"
        className="flex flex-col gap-[0.5rem] w-[100%]"
        // onSubmit={}
      >
        <label className=" dark_Marine_text">Name</label>
        <input
          className=" ring-1 ring-gray-400 rounded-lg w-[100%] px-[0.75rem] py-[0.5rem] text-sm text-gray-500"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
          placeholder="e.g stephen king"
        />

        <label className=" dark_Marine_text">Email Address</label>
        <input
          className=" ring-1 ring-gray-400 rounded-lg w-[100%] px-[0.75rem] py-[0.5rem] text-sm text-gray-500"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="e.g stephenking@gemail.com"
          required
        />

        <label className=" dark_Marine_text">Phone Number</label>
        <input
          className=" ring-1 ring-gray-400 rounded-lg w-[100%] px-[0.75rem] py-[0.5rem] text-sm text-gray-500"
          type="phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
          placeholder="e.g +1 234 567 890"
        />
      </form>
      <footer className=" flex mt-[2rem] justify-end  ">
        <Button handleClick={handleNextClick}>Next Step</Button>
      </footer>
    </section>
  );
}
