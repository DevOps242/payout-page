import { createContext, useState } from "react";

import { DATA } from "../data/data";

const PayoutContext = createContext();

export function PayoutProvider({ children }) {
  const [selectedPayout, setSelectedPayout] = useState([]);
  const [data, setData] = useState({ ...DATA });

  const addPayoutAffilate = ({ payoutRecord }) => {
    setSelectedPayout((prevState) => [...prevState, { payoutRecord }]);
  };

  //   const removePayoutAffilate = (id) => {
  //     // remove by the id.
  //     setSelectedPayout();
  //   };

  return (
    <PayoutContext.Provider value={{ data, selectedPayout }}>
      {children}
    </PayoutContext.Provider>
  );
}

export default PayoutContext;
