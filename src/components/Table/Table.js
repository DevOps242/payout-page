import React from "react";

// npm install @heroicons/react

import { convertPenniesToDollars } from "../../Utility/Helper";
import Button from "../ui/Button/Button";

const Table = ({ data }) => {
  // temp icon until i get to better internet
  let tempIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );

  let displayData = <p>Data is currently not available</p>;

  if (data.length > 0) {
    displayData = data.map((affilate) => {
      return (
        <tr
          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
          key={affilate.id}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div className="flex justify-center">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault3"
                  />
                </div>
              </div>
            </div>
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            {affilate.affilateName}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            {affilate.recentDate}
          </td>
          <td className="table-revenue-generated-text text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            +${convertPenniesToDollars(affilate.revenueGen)}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            ${convertPenniesToDollars(affilate.paidPayout)}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            ${convertPenniesToDollars(affilate.unpaidPayout)}
          </td>
          <td className="table-ready-payout-text text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            ${convertPenniesToDollars(affilate.readyPayout)}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            <div className="table-view-button-container container mx-auto">
              <a href="" target="_blank">
                <div className="flex justify-center">
                  <div className="flex-none w-1/3 ">
                    <p className="table-view-button-text">View</p>
                  </div>
                  <div className="flex-none w-1/2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="blue"
                        className="w-3 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            <Button title={"Send payment"} h={30} icon={tempIcon} />
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <div classNameName="table-container">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        <div className="flex justify-center">
                          <div>
                            <div className="form-check">
                              <input
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault3"
                              />
                            </div>
                          </div>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Affilate Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Most recent referral
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Revenue Generated
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Paid Payouts
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Unpaid Payouts
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Ready Payouts
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Breakdown
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-body-text">{displayData}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
