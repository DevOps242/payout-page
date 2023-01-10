import React from "react";

import Backdrop from "../Backdrop/Backdrop";

const modal = ({ children, show, clicked }) => {
  return (
    <>
      <Backdrop show={show} clicked={clicked} />
      <div
        className="modal "
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default React.memo(
  modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
