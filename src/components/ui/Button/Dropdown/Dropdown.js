import React, { useState } from "react";
import DropdownCard from "./DropdownCard";

const Dropdown = ({
  onPressAction,
  title,
  icon,
  color,
  w,
  h,
  options,
  action,
  tabs,
}) => {
  const [open, setOpen] = useState(false);

  function toggleHandler() {
    setOpen(!open);
  }

  const classVairables =
    "card-button mb-2 mr-1 px-7 py-2.5 bg-blue-600 text-white font-small text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ";

  return (
    <>
      <div className="button-container ">
        <button
          onClick={toggleHandler}
          style={{
            height: h + "px",
            width: w + "px",
            color: color,
          }}
          type="button"
          className={classVairables}
        >
          {title}
          <div className="inline-block">
            <span>{icon}</span>
          </div>
        </button>
        {open ? <DropdownCard options={options} action tabs={tabs} /> : null}
      </div>
    </>
  );
};

export default Dropdown;
