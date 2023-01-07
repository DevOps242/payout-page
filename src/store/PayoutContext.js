import { createContext, useState } from "react";

import { DATA } from "../data/data";

const PayoutContext = createContext();
// const [payout, setPayout] = useState();

export function PayoutProvider({ children }) {
  return (
    <PayoutContext.Provider value={{ DATA }}>{children}</PayoutContext.Provider>
  );
}

export default PayoutContext;
