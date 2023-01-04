import React, { useState, useEffect } from "react";
import Table from "../components/Table/Table";

import Card from "../components/ui/Card/Card";
import Tabs from "../components/ui/Tabs/Tabs";

import { convertPenniesToDollars } from "../Utility/Helper";

import { DATA } from "../data/data";

const Payout = () => {
  const [data, setData] = useState(DATA.clients);

  return (
    <>
      <div className="payout-container">
        <h1 className="text-3xl font-bold">Payouts Overview</h1>
        <br />
        <div className="cards-container flex mb-4">
          {/* Card one */}
          <div className="flex-none w-1/3 h-14">
            <Card title="Total Paid Payouts" amount={0} />
          </div>
          {/* Card two */}
          <div className="flex-none w-1/3">
            <Card
              title="Total Unpaid Payouts"
              amount={convertPenniesToDollars(18555)}
            />
          </div>

          {/* Card three */}
          <div className="flex-none w-1/3">
            <Card
              title="Total Ready Payouts"
              amount={convertPenniesToDollars(18555)}
              button={true}
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs />

        <br />
        <Table data={data} />
      </div>
    </>
  );
};

// 10, 000 - $100;

export default Payout;
