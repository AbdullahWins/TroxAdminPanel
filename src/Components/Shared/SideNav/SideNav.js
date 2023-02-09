import React, { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className={`${isOpen ? "w-24" : "w-96"}`}>
      <p>sidenav</p>
      <button onClick={toggle} className="btn bg-primaryMain">
        Toggle
      </button>
    </div>
  );
};

export default SideNav;
