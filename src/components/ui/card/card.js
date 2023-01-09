import React from "react";

import Button from "../Button/Button";

const Card = ({ title, amount, button, openModal }) => {
  function payAllButtonHandler() {
    openModal();
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="card-container block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <div className="flex items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h6 className="text-gray-900 text-md leading-tight font-medium">
              {title}
            </h6>
          </div>

          <div className="card-button-container flex items-center mb-3">
            <p className="text-gray-700 text-base mb-4">${amount}</p>

            {button ? (
              <Button
                title="Pay All"
                h={25}
                onPressAction={() => payAllButtonHandler()}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
