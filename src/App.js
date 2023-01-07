import React from "react";

import "./App.css";

import Payout from "./Screens/Payout";

import { PayoutProvider } from "./store/PayoutContext";

function App() {
  return (
    <>
      <PayoutProvider>
        <Payout />
      </PayoutProvider>
    </>
  );
}

export default App;
