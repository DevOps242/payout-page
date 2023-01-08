import React, { useContext, useState, useEffect } from "react";

import Table from "../components/Table/Table";
import Card from "../components/ui/Card/Card";
import Tabs from "../components/ui/Tabs/Tabs";
import Modal from "../components/ui/Modal/Modal";

import { convertPenniesToDollars } from "../Utility/Helper";

import PayoutContext from "../store/PayoutContext";
import Payments from "../contianer/Payments/Payments";

const Payout = () => {
  const payoutCtx = useContext(PayoutContext);

  const [data, setData] = useState(payoutCtx.data.clients);
  const [selectedData, setSeletedData] = useState(payoutCtx.selectedPayout);
  const [modalState, setModalState] = useState(false);

  function totalPaidPayoutSumHandler(clientData) {
    let totalPaidPayout = 0;
    clientData.forEach((item) => {
      totalPaidPayout += item.paidPayout;
    });
    return totalPaidPayout;
  }

  function totalUnpaidPayoutSumHandler(clientData) {
    let totalUnpaidPayout = 0;
    clientData.forEach((item) => {
      totalUnpaidPayout += item.unpaidPayout;
    });
    return totalUnpaidPayout;
  }

  function totalReadyPayoutSumHandler(clientData) {
    let totalReadyPayout = 0;
    clientData.forEach((item) => {
      totalReadyPayout += item.readyPayout;
    });
    return totalReadyPayout;
  }

  function selectPayoutAffilateHandler(id) {
    const affilate = data.find((item) => {
      return item.id === id;
    });

    payoutCtx.addPayoutAffilate(affilate);
    setSeletedData((prevState) => [affilate, ...prevState]);
  }

  function removePayoutAffilateHandler(id) {
    const affilate = data.find((item) => {
      return item.id === id;
    });
    payoutCtx.removePayoutAffilate(affilate);
    setSeletedData((prevState) => [affilate, ...prevState]);
  }

  function closeModalHandler() {
    setModalState(false);
  }

  function openModalHandler() {
    setModalState(true);
  }

  return (
    <>
      <div className="payout-container">
        <h1 className="text-3xl font-bold">Payouts Overview</h1>
        <br />
        <div className="cards-container flex mb-4">
          {/* Card one */}
          <div className="flex-none w-1/3 h-14">
            <Card
              title="Total Paid Payouts"
              amount={convertPenniesToDollars(totalPaidPayoutSumHandler(data))}
            />
          </div>
          {/* Card two */}
          <div className="flex-none w-1/3">
            <Card
              title="Total Unpaid Payouts"
              amount={convertPenniesToDollars(
                totalUnpaidPayoutSumHandler(data)
              )}
            />
          </div>

          {/* Card three */}
          <div className="flex-none w-1/3">
            <Card
              title="Total Ready Payouts"
              amount={convertPenniesToDollars(totalReadyPayoutSumHandler(data))}
              button={true}
              openModal={openModalHandler}
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          mode="pending"
          openModal={openModalHandler}
          tableData={
            <Table
              selectAction={(id) => selectPayoutAffilateHandler(id)}
              unselectAction={(id) => removePayoutAffilateHandler(id)}
              data={data}
              openModal={openModalHandler}
            />
          }
        />
      </div>

      <Modal show={modalState} clicked={closeModalHandler}>
        <Payments closeModal={closeModalHandler} />
      </Modal>
    </>
  );
};

// 10, 000 - $100;

export default Payout;
