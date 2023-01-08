import { createContext, useState } from "react";

import { DATA } from "../data/data";

const PayoutContext = createContext();

export function PayoutProvider({ children }) {
  const [selectedPayout, setSelectedPayout] = useState([]);
  const [data, setData] = useState({ ...DATA });

  const addPayoutAffilate = ({ payoutRecord }) => {
    setSelectedPayout((prevState) => [{ payoutRecord }, ...prevState]);

    console.log(selectedPayout);
  };

  const removePayoutAffilate = (id) => {
    // remove by the id.
    setSelectedPayout();
  };

  return (
    <PayoutContext.Provider
      value={{ data, selectedPayout, addPayoutAffilate, removePayoutAffilate }}
    >
      {children}
    </PayoutContext.Provider>
  );
}

export default PayoutContext;
