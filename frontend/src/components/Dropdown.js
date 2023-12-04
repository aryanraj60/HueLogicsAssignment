// Dropdown.js
import React from "react";

const Dropdown = ({ quarters, selectedQuarter, onSelectQuarter }) => {
  return (
    <select
      className="border p-2 m-4 rounded-md bg-slate-300 w-36"
      value={selectedQuarter}
      onChange={(e) => onSelectQuarter(e.target.value)}
    >
      {quarters.map((quarter) => (
        <option key={quarter} value={quarter}>
          {quarter}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
