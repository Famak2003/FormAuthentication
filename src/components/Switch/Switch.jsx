import React, { useEffect, useState } from "react";

const Switch = ({ setGetToggle }) => {
  const [openSwitch, setOpenSwitch] = useState(false);

  const toggleSwitch = () => {
    setOpenSwitch(!openSwitch);
  };

  useEffect(() => {
    setGetToggle(openSwitch);
  }, [openSwitch]);

  return (
    <>
      <div
        onClick={toggleSwitch}
        className={`w-10 h-full transition-all duration-300 bg-black rounded-full cursor-pointer flex items-center p-1`}
      >
        <div
          className={`transition-all duration-300 bg-white w-4 h-4 rounded-full ${
            openSwitch ? "translate-x-[100%]" : "translate-x-0"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Switch;
