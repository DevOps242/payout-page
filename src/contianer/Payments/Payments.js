import React, { useContext, useState } from "react";
import PayoutContext from "../../store/PayoutContext";

const Payments = () => {
  const payoutCtx = useContext(PayoutContext);

  const [selectedAffilate, setSelectedAffilate] = useState(
    payoutCtx.selectedPayout
  );

  const [affilate, setAffilate] = useState(payoutCtx.data.clients);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default Payments;
