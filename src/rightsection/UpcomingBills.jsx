import React from "react";
import { Data_bills } from "../data";
import { direction_logo } from "../utils/svgs";

function UpcomingBills() {
  return (
    <div className="items-center justify-center flex flex-col space-y-6 w-full py-2 px-2">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-bold text-3xl"> Upcoming Bills </h1>
        <div className="py-2 px-2 bg-blue-100 rounded">
            {direction_logo}
        </div>
      </div>
      <div className="gap-x-4 items-center justify-center grid grid-cols-3 w-full">
        {Data_bills.map(({ color, id, title, price, icon }) => (
          <div
            className={`${color} pb-6 pt-6 rounded-md px-3 w-full flex flex-col items-start justify-start`}
          >
            <div
              className={`pt-2 ${
                title === "Tinder Gold"
                  ? "bg-gray-100 rounded-full pb-2 px-2 mb-2"
                  : ""
              } `}
            >
              {icon}
            </div>
            <h1
              className={` text-md pb-6 pt-2 ${
                id === 2 ? "text-gray-100" : "text-black"
              } `}
            >
              {" "}
              {title}{" "}
            </h1>
            <h1
              className={`font-bold text-xl ${
                id === 2 ? "text-gray-100" : "text-black"
              } `}
            >
              {" "}
              {price} ${" "}
            </h1>
            <p
              className={` text-sm ${
                id === 2 ? "text-gray-100/50" : "text-gray-600"
              } `}
            >
              /Month
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full bg-blue-100 rounded-md px-3 py-4 items-start justify-start space-x-6">
        <div className="bg-[#689800] rounded-full py-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-black-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start text-black space-y-4 justify-start w-full">
          <h1>You have $ 2,250 registration bonus valid for the next 18 days</h1>
          <div className="flex items-start text-[#3C45A0] font-medium space-x-4 w-full justify-start">
            <a> View Details </a>
            <h1> {">"}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingBills