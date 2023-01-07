import React from "react";
import Button from "../Button";

const DropdownCard = ({ options, action }) => {
  function test() {
    console.log("test");
  }
  const tabs = [
    {
      onPressAction: test,
      title: "Mark as paid",
    },
    {
      onPressAction: test,
      title: "Reject",
    },
    {
      onPressAction: test,
      title: "Send payouts",
    },
  ];

  return (
    <>
      <div class="container flex justify-center">
        <div class="dropdown-container block rounded-lg shadow-lg bg-white max-w-sm">
          {tabs.map((item) => {
            console.log(item);
            if (action) {
              return (
                <>
                  <div className="dropdown-menu-container container mb-3">
                    <h4 className="dropdown-menu" onClick={item.onPressAction}>
                      {item.title}
                    </h4>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownCard;
