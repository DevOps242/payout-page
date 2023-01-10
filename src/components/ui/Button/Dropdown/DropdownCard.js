import React from "react";
import Button from "../Button";

const DropdownCard = ({ options, action, tabs }) => {
  return (
    <div className="container flex justify-center">
      <div className="dropdown-container block rounded-lg shadow-lg bg-white max-w-sm">
        {tabs.map((item) => {
          if (action) {
            return (
              <div
                key={Math.random() * (100000 - 1) + 1}
                className="dropdown-menu-container container mb-3"
              >
                <h4 className="dropdown-menu" onClick={item.onPressAction}>
                  {item.title}
                </h4>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default DropdownCard;
