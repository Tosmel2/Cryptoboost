import React, { useState } from "react";
import { donate } from "@/utils/donate";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [transactionSuccessful, setIsTransactionSuccessful] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleDonate = async () => {
    const campaignId = 0;
    try {
      const feedback = await donate({ campaignId, amount });
      setAmount("");
      setFeedbackMsg(feedback);
      setIsTransactionSuccessful(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmuntChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <main className="bg-[#120b29]">
        <section className="contactus py-10 md:w-[80%] px-3 mx-auto md:flex md:justify-center">
          <div className="bg-white rounded-xl p-2 md:p-6 md:w-1/2">
            <form action="" className="space-y-4">
              <div className="font-bold text-purple-700 text-2xl border-b-2 mb-3 pb-2">
                Donate
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-bold text-purple-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Tosmel T"
                    className="bg-purple-50 w-full p-2 border rounded-3xl focus:outline-none pl-4 "
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="number"
                    className="block text-sm font-bold text-purple-600"
                  >
                    Amount <span className="text-gray-400">(optional)</span>{" "}
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={handleAmuntChange}
                    className="bg-purple-50 w-full p-2 border rounded-3xl focus:outline-none text-black pl-4  "
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-purple-600"
                  >
                    Remark
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    rows={10}
                    cols={20}
                    placeholder="Tell us what you feel about the project"
                    className="bg-purple-50 w-full p-2 border rounded-lg focus:outline-none pl-4 resize-none "
                  />
                </div>

                <div className="pt-2 justify-center">
                  <button
                    type="button"
                    className="md:w-[60%] w-full px-8 py-2 font-semibold rounded-3xl bg-purple-700 text-white ml-9"
                    onClick={handleDonate}
                  >
                    Send message
                  </button>
                  <p
                    className={`text-[16px] italic font-bold text-black mt-5 ${
                      transactionSuccessful ? "" : "hidden"
                    }`}
                  >
                    {feedbackMsg}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Donate;
