import React, { useState } from "react";
import avater from "../../../Assets/img/profile/avater.png";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "w-24" : "w-62"
      } bg-primaryMain h-full rounded-r-lg`}
    >
      <section className="flex items-start justify-between p-4 gap-2">
        <div>
          <button onClick={toggle}>
            <img className="w-14" src={avater} alt="" />
          </button>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <p className="text-bold text-lg font-black">William</p>
          <p>Super Admin</p>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 23.0025H4C2.9 23.0025 2 22.1025 2 21.0025C2 19.9025 2.9 19.0025 4 19.0025H20C21.1 19.0025 22 19.9025 22 21.0025C22 22.1025 21.1 23.0025 20 23.0025ZM13.06 4.1925L16.81 7.9425L8.04 16.7125C7.86 16.9025 7.6 17.0025 7.34 17.0025H5C4.45 17.0025 4 16.5525 4 16.0025V13.6625C4 13.3925 4.11 13.1425 4.29 12.9525L13.06 4.1925ZM17.88 6.8725L14.13 3.1225L15.96 1.2925C16.35 0.9025 16.98 0.9025 17.37 1.2925L19.71 3.6325C20.1 4.0225 20.1 4.6525 19.71 5.0425L17.88 6.8725Z"
                fill="#37B6B6"
              />
            </svg>
          </button>
        </div>
      </section>
      <button onClick={toggle} className="btn bg-primaryMain m-1">
        Toggle
      </button>
    </div>
  );
};

export default SideNav;
