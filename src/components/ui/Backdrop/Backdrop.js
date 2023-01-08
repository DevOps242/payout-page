import React from "react";

const backdrop = ({ clicked, show }) =>
  show ? <div className="backdrop" onClick={clicked}></div> : null;

export default backdrop;
