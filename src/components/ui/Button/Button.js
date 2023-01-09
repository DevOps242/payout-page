import React from "react";

const Button = ({ onPressAction, title, icon, color, size, w, h }) => {
  const classVairables =
    "card-button mb-2 px-7 py-2.5 bg-blue-600 text-white font-small text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ";

  return (
    <>
      <div className="button-container">
        <button
          onClick={() => onPressAction()}
          style={{
            height: h + "px",
            width: w + "px",
            color: color,
          }}
          type="button"
          className={icon ? [classVairables] : [classVairables]}
        >
          {title}
          <div className="inline-block">
            <span>{icon}</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;
