import React, { useContext, useState } from "react";
import PayoutContext from "../../store/PayoutContext";

import { convertPenniesToDollars } from "../../Utility/Helper";

import Button from "../../components/ui/Button/Button";

const Payments = ({ closeModal }) => {
  const payoutCtx = useContext(PayoutContext);

  const [selectedAffilates, setSelectedAffilates] = useState(
    payoutCtx.selectedPayout
  );

  const [storeCredit, setStoreCredit] = useState(0);
  const [tremendous, setTremendous] = useState(0);

  const [affilate, setAffilate] = useState(payoutCtx.data.clients);

  function performAddCalculationsHandler(affilate) {
    if (affilate.payoutType === "Store Credit") {
      setStoreCredit(storeCredit + affilate.readyPayout);
    }

    if (affilate.payoutType === "Cash") {
      setTremendous(tremendous + affilate.readyPayout);
    }
  }
  function performSubCalculationsHandler(affilate) {
    if (affilate.payoutType === "Store Credit") {
      console.log("Store adjustment");
      setStoreCredit(storeCredit - affilate.readyPayout);
    }

    if (affilate.payoutType === "Cash") {
      console.log("Cash adjustment");
      setTremendous(tremendous - affilate.readyPayout);
    }
  }

  function toggleSelectedAffilate(event, affilate) {
    if (
      selectedAffilates.find((item) => {
        return item.id === affilate.id;
      })
    ) {
      setSelectedAffilates((prevState) => [
        ...prevState.filter((item) => {
          return item.id !== affilate.id;
        }),
      ]);
      payoutCtx.removePayoutAffilate(affilate);
      performSubCalculationsHandler(affilate);
    } else {
      setSelectedAffilates((prevState) => [affilate, ...prevState]);
      payoutCtx.addPayoutAffilate(affilate);
      performAddCalculationsHandler(affilate);
    }

    return;
  }

  let tempIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 21"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );

  return (
    <>
      <div className="flex-1 payment-modal-container">
        <div class="flex flex-row container w-full mb-5">
          <div class="basis-1/7">
            <p className="flex back-button text-center" onClick={closeModal}>
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
              Back
            </p>
          </div>
          <div class="basis-3/4 text-center">
            <p className="test">Confirm Payouts</p>
          </div>
        </div>

        <div className="table-modal-outer-container container w-full justify-center w-full">
          <div className="block bg-white max-w-full text-center">
            <div className="py-4 px-6 border-b border-gray-300">
              The following affiliates will be sent payouts:
            </div>
            <table className="modal-table min-w-full table-auto w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-black-1000 px-6 py-4 text-center"
                  >
                    Affilate
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-black-1000 px-6 py-4 text-center"
                  >
                    Commission
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-black-1000 px-6 py-4 text-center"
                  >
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {affilate.map((item) => {
                  return (
                    <tr
                      className="bg-white border-b dark:border-gray-250"
                      key={item.id}
                    >
                      <td className="text-sm font-light text-black-400 px-6 py-4 text-center">
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none h-3 w-3 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                            onChange={(e) => toggleSelectedAffilate(e, item)}
                            checked={
                              selectedAffilates.find((affilateX) => {
                                return item.id === affilateX.id;
                              })
                                ? true
                                : false
                            }
                          />
                        </div>
                        {item.affilateName}
                      </td>
                      <td className="text-sm font-bold text-black-400 px-6 py-4 text-center">
                        ${convertPenniesToDollars(item.readyPayout)}
                      </td>
                      <td className="text-sm font-light text-black-400 px-6 py-4 text-center">
                        {item.payoutType}
                      </td>
                    </tr>
                  );
                })}

                <tr className="bg-white border-b dark:border-gray-250">
                  <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                    Store Credit:
                  </td>
                  <td></td>
                  <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                    ${convertPenniesToDollars(storeCredit)}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:border-gray-250">
                  <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                    Tremendous:
                  </td>
                  <td></td>
                  <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                    ${convertPenniesToDollars(tremendous)}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                    Total:
                  </td>
                  <td></td>
                  <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                    ${convertPenniesToDollars(tremendous + storeCredit)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Send Payout button */}
      <div className="text-center py-3 px-6 text-gray-700 w-full">
        <Button
          title="Send payouts"
          h={43}
          w={300}
          onPressAction={() => console.log(selectedAffilates)}
          icon={tempIcon}
        />
      </div>
    </>
  );
};

export default Payments;
