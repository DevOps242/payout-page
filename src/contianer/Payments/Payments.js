import React, { useContext, useState } from "react";
import PayoutContext from "../../store/PayoutContext";

import { convertPenniesToDollars } from "../../Utility/Helper";

import Button from "../../components/ui/Button/Button";
import Table from "../../components/Table/Table";
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
      console.log("Store adjustment");
      setStoreCredit(storeCredit + affilate.readyPayout);
    }

    if (affilate.payoutType === "Cash") {
      console.log("Cash adjustment");
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
    console.log(affilate);
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

  return (
    <>
      <div className="payment-modal-container">
        <div className="container-head flex w-2/2">
          <p className="flex w-1/3 back-button" onClick={closeModal}>
            Back
          </p>
          <p className="flex w-1/3">Confirm Payouts</p>
        </div>

        <br />
        <div className="relative overflow-x-auto container">
          <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
              <div className="py-3 px-6 border-b border-gray-300">
                The following affiliates will be sent payouts:
              </div>
              <div className="container ">
                <table className="min-w-full">
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
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault3"
                                onChange={(e) =>
                                  toggleSelectedAffilate(e, item)
                                }
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
                        {/* Store Credit Types */}$
                        {convertPenniesToDollars(storeCredit)}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:border-gray-250">
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        Tremendous:
                      </td>
                      <td></td>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        {/* Cash Payments Types */}$
                        {convertPenniesToDollars(tremendous)}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        Total:
                      </td>
                      <td></td>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        {/* Total amount */}$
                        {convertPenniesToDollars(tremendous + storeCredit)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Send Payout button */}
              <div className="py-3 px-6 text-gray-600">
                <Button
                  title="Send payouts"
                  h={43}
                  w={300}
                  onPressAction={() => console.log("test")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
