import { createContext, useState } from "react";

import { DATA } from "../data/data";

const PayoutContext = createContext();

export function PayoutProvider({ children }) {
  const [selectedPayout, setSelectedPayout] = useState([]);
  const [data, setData] = useState({ ...DATA });

  const addPayoutAffilate = (payoutRecord) => {
    setSelectedPayout((prevState) => [payoutRecord, ...prevState]);
  };

  const removePayoutAffilate = (payoutRecord) => {
    setSelectedPayout((prevState) => [
      ...prevState.filter((item) => {
        return item.id !== payoutRecord.id;
      }),
    ]);
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
