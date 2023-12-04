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
    <div className="border p-4 m-4 w-64">
      <h4 className="text-lg font-bold">{`${quarter} (${duration})`}</h4>
      <p>Revenue: {revenue}</p>
      <p>Net Income: {netIncome}</p>
      <p>Net Profit: {netProfit}</p>
      <p>Operating Income: {operatingIncome}</p>
    </div>
  );
};

export default QuarterTile;
