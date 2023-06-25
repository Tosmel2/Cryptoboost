"use client";
import { AllProjects, UpcomingProjects } from "@/components/FundedProjects";
import React, { useState } from "react";
import { createCampaign } from "@/utils/createCampaign";

const CreateCampaign = () => {
  const [campaignTitle, setCampaignTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [campaignExecuted, setIsCampaignExecuted] = useState(false);
  const [feedBackMsg, setFeedBackMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const feedback = await createCampaign({
        campaignTitle,
        campaignDescription: projectDescription,
      });
      setCampaignTitle("");
      setProjectDescription("");
      setFeedBackMessage(feedback);
      setIsCampaignExecuted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full bg-[#120b29] py-5">
      <section className="md:py-4  w-[90%] md:w-[85%] mx-auto">
        <div className="text-center text-white py-5 px-3 md:px-0">
          <h1 className="text-2xl md:text-4xl font-bold">Create Campaign</h1>
          <div className="w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600"></div>
        </div>

        <div className="rounded-xl p-2 md:p-6 md:w-[90%] mx-auto">
          <form action="" className="space-y-4">
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between">
                <div className="space-y-1 md:w-[48%] w-full pb-3 md:pb-0">
                  <label
                    htmlFor="full name"
                    className="block text-sm font-bold text-white md:p-2"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Tosmel Tungsten"
                    className="w-full p-2  bg-transparent border rounded-3xl focus:outline-none pl-4 text-white"
                  />
                </div>

                <div className="space-y-1 md:w-[48%] w-full">
                  <label
                    htmlFor="campaign title"
                    className="block text-sm font-bold text-white md:p-2"
                  >
                    Campaign Title*
                  </label>
                  <input
                    type="text"
                    name="text"
                    placeholder="Write a title"
                    className="w-full p-2 border rounded-3xl bg-transparent focus:outline-none pl-4 text-white"
                    value={campaignTitle}
                    onChange={(e) => setCampaignTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-white md:p-2"
                >
                  Project Description*
                </label>
                <textarea
                  type="text"
                  name="message"
                  rows={10}
                  cols={50}
                  placeholder="write about the project"
                  className="w-full p-2 border bg-transparent rounded-lg focus:outline-none pl-4 resize-none text-white"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>

              <div className="w-full flex h-20 bg-purple-600 rounded-md">
                <span className="hidden md:block">
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="-6.4 -6.4 76.80 76.80"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="3"
                    stroke="#ffffff"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M49.19,57.34H14.81L16,35.91A15.46,15.46,0,0,1,31.44,21.3h1.83A14.71,14.71,0,0,1,48,35.2Z"></path>
                      <path d="M27.38,21.84,19.72,7.39a.5.5,0,0,1,.52-.73l4.65.77a46,46,0,0,0,14.76.05l5.11-.81a.5.5,0,0,1,.51.75L36.85,21.53"></path>
                      <line
                        x1="28.23"
                        y1="13.15"
                        x2="30.73"
                        y2="21.3"
                        stroke-linecap="round"
                      ></line>
                      <line
                        x1="35.14"
                        y1="14.79"
                        x2="33.79"
                        y2="21.31"
                        stroke-linecap="round"
                      ></line>
                      <path d="M38.14,34.05a5.8,5.8,0,0,0-5.45-3.51c-4.9,0-5.09,3.51-5.09,3.51s-.73,4.33,5.27,4.79c6.25.48,5.27,4.79,5.27,4.79s-.64,3.75-5.27,4S26.8,43,26.8,43"></path>
                      <line x1="32.69" y1="27.43" x2="32.69" y2="51.21"></line>
                    </g>
                  </svg>
                </span>
                <h1 className="text-white p-5 font-bold text-md md:text-2xl">
                  You will get 100% of the raised amount
                </h1>
              </div>

              <div className="flex flex-wrap justify-between">
                <div className="space-y-1 md:w-[48%] w-full pb-3 md:pb-0">
                  <label
                    htmlFor="goal"
                    className="block text-sm font-bold text-white md:p-2"
                  >
                    Goal*
                  </label>
                  <input
                    type="number"
                    name="goal"
                    placeholder="ETH 0.05"
                    className="w-full p-2 border rounded-3xl bg-transparent focus:outline-none pl-4 text-white"
                  />
                </div>

                <div className="space-y-1 md:w-[48%] w-full">
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold text-white md:p-2"
                  >
                    End Date*
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="dd/mm/yy"
                    className="w-full p-2 border rounded-3xl bg-transparent focus:outline-none pl-4 text-white"
                  />
                </div>
              </div>

              <div className="space-y-1 ">
                <label
                  htmlFor="image"
                  className="block text-sm font-bold text-white md:p-2"
                >
                  Campaign Image*
                </label>
                <input
                  type="text"
                  name="cimage"
                  placeholder="Place image URL of your campaign"
                  className="w-full bg-transparent p-4 h-10 border rounded-3xl focus:outline-none pl-4 text-white"
                />
              </div>

              <div className="py-10 text-center">
                <button
                  type="button"
                  className="md:w-[60%] w-full px-8 py-3 font-bold rounded-3xl bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% text-white"
                  onClick={handleSubmit}
                >
                  Submit new Campaign
                </button>
                <p
                  className={`text-[16px] italic font-bold text-white mt-5 ${
                    campaignExecuted ? "" : "hidden"
                  }`}
                >
                  {feedBackMsg}
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateCampaign;
