import React, { useContext, useState } from "react";
import PayoutContext from "../../store/PayoutContext";

import Button from "../../components/ui/Button/Button";
import Table from "../../components/Table/Table";
const Payments = ({ closeModal }) => {
  const payoutCtx = useContext(PayoutContext);

  const [selectedAffilate, setSelectedAffilate] = useState(
    payoutCtx.selectedPayout
  );

  const [affilate, setAffilate] = useState(payoutCtx.data.clients);

  return (
    <>
      <div className="payment-modal-container">
        <div className="container-head flex w-2/2">
          <p className="flex w-1/3 back-button" onClick={closeModal}>
            Back
          </p>
          <p className="flex w-2/3">Confirm Payouts</p>
        </div>

        <br />
        <div className="relative overflow-x-auto container">
          <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
              <div className="py-3 px-6 border-b border-gray-300">
                The following affiliates will be sent payouts:
              </div>
              <div class="container ">
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
                    {/* Dynamic data */}

                    <tr className="bg-white border-b dark:border-gray-250">
                      <td className="text-sm font-light text-black-400 px-6 py-4 text-center">
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                            // onChange={(e) =>
                            //   toggleSelectedAffilate(e, affilate)
                            // }
                            // checked={
                            //   selectedAffilates.find((item) => {
                            //     return item.id === affilate.id;
                            //   })
                            //     ? true
                            //     : false
                            // }
                          />
                        </div>
                        Zack Truetel
                      </td>
                      <td className="text-sm font-bold text-black-400 px-6 py-4 text-center">
                        $16.20
                      </td>
                      <td className="text-sm font-light text-black-400 px-6 py-4 text-center">
                        Store Credit
                      </td>
                    </tr>

                    {/* Testing  */}
                    <tr className="bg-white border-b dark:border-gray-250">
                      <td className="text-sm font-light text-black-400 px-6 py-4 text-center">
                        <div className="form-check">
                          <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                            // onChange={(e) =>
                            //   toggleSelectedAffilate(e, affilate)
                            // }
                            // checked={
                            //   selectedAffilates.find((item) => {
                            //     return item.id === affilate.id;
                            //   })
                            //     ? true
                            //     : false
                            // }
                          />
                        </div>
                        Adam Kohler
                      </td>
                      <td className="text-sm font-bold text-black-400 px-6 py-4 text-center">
                        $9.73
                      </td>
                      <td className="text-sm font-light text-black-400 px-6 py-4 text-center">
                        Cash
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:border-gray-250">
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        Store Credit:
                      </td>
                      <td></td>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        $185.88
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:border-gray-250">
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        Tremendous:
                      </td>
                      <td></td>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        $0.00
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        Total:
                      </td>
                      <td></td>
                      <td className="text-sm font-bold text-black-1000 px-6 py-4 text-center">
                        $185.88
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
