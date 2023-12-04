// QuarterTile.js
import React from "react";

const QuarterTile = ({
  duration,
  quarter,
  revenue,
  netIncome,
  netProfit,
  operatingIncome,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex items-center justify-center">
        <h4 className="text-lg font-bold">{`${quarter} (${duration})`}</h4>
      </div>
      <div className="border-t border-gray-200">
        <div className="p-4 bg-white rounded-lg md:p-8">
          <div className="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 lg:gap-12">
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold">{revenue}</p>
              <p className="text-gray-500 dark:text-gray-400">Revenue</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold">{netIncome}</p>
              <p className="text-gray-500 dark:text-gray-400">Net Income</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold">{netProfit}</p>
              <p className="text-gray-500 dark:text-gray-400">Net Profit</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="mb-2 text-3xl font-extrabold">{operatingIncome}</p>
              <p className="text-gray-500 dark:text-gray-400">
                Operating Income
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuarterTile;
