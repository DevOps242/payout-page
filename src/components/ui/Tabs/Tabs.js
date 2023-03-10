import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Button/Dropdown/Dropdown";

import PayoutContext from "../../../store/PayoutContext";

const Tabs = ({ mode, tableData, openModal }) => {
  const [tabMode, setTabMode] = useState(null);
  const [inputText, setInputText] = useState("");

  const payoutCtx = useContext(PayoutContext);

  function textOnChangeHandler(event) {
    setInputText(event.target.value);
  }

  if (tabMode === null) {
    setTabMode(mode);
  }

  const downIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 26"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const actionTabs = [
    {
      onPressAction: () => console.log("Mark as paid"),
      title: "Mark as paid",
    },
    {
      onPressAction: () => console.log("Reject"),
      title: "Reject",
    },
    {
      onPressAction: openModal,
      title: "Send payouts",
    },
  ];

  const sortTabs = [
    {
      onPressAction: () => console.log("Most Recent"),
      title: "Reveneue Generated",
    },
    {
      onPressAction: () => console.log("Most Recent"),
      title: "Most Recent Referral",
    },
  ];
  const filterTabs = [
    {
      onPressAction: () => console.log("All pending payouts"),
      title: "All pending payouts",
    },
    {
      onPressAction: () => console.log("Ready Payouts"),
      title: "Ready Payouts",
    },
    {
      onPressAction: () => console.log("No Leaks"),
      title: "No Leaks",
    },
  ];

  return (
    <>
      <div className="tabs-container">
        <ul
          className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 "
          id="tabs-tabJustify"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#pending-payouts"
              className="nav-link w-full block font-medium text-xs leading-tight
      uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
              id="tabs-home-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-pending-payouts"
              role="tab"
              aria-controls="tabs-pending-payouts"
              aria-selected="true"
            >
              Pending Payouts
            </a>
          </li>

          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#paid-payouts"
              className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
              id="tabs-messages-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-paid-payouts"
              role="tab"
              aria-controls="tabs-paid-payouts"
              aria-selected="false"
            >
              Paid Payouts
            </a>
          </li>
        </ul>
      </div>

      {/* Build the table and search sections. */}
      <div className="tab-button-container contianer flex">
        <div className="container flex w-1/4">
          <div className="container flex w-1/4">
            <Dropdown
              title="Sort By"
              h={28}
              options={{}}
              tabs={sortTabs}
              icon={downIcon}
            />
          </div>
          <div className="container flex w-1/4">
            <Dropdown
              title="Filter By"
              h={28}
              options={{}}
              tabs={filterTabs}
              icon={downIcon}
            />
          </div>
          <div className="container flex w-1/4">
            <Dropdown
              title="Actions"
              h={28}
              options={{}}
              action
              tabs={actionTabs}
              icon={downIcon}
            />
          </div>
          <div className="container flex w-1/4">
            <p className="whitespace-nowrap">
              {payoutCtx.data.clients.length} pending payouts
            </p>
          </div>
        </div>
        <div className="flex w-3/3">
          <div className="flex w-3/3">
            <form>
              <div className="input-container">
                <input
                  id="searchEmailName"
                  className="input-field border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-black-600 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                  placeholder="Affiliate's name or email"
                  onChange={textOnChangeHandler}
                  value={inputText}
                  height={28}
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex w-1/3">
            <Button title="Search" h={28} />
          </div>
          <div className="flex w-1/3">
            <Button title="Export" h={28} />
          </div>
        </div>
      </div>
      <div className="tab-content" id="tabs-pending-payouts">
        {/* Need to redesign here  */}
        {tableData}
      </div>
    </>
  );
};

export default Tabs;
