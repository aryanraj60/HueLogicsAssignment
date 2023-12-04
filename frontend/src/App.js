// Dashboard.js
import React, { useState, useEffect } from "react";
import QuarterTile from "./components/QuarterTile";
import Dropdown from "./components/Dropdown";
import axios from "axios";
import Loader from "./components/Loader";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const quarters = ["Q1", "Q2", "Q3", "Q4"];

const App = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(quarters[0]);
  const [quarterData, setQuarterData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getQuarterData = async (quarter) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/getQuarterData?quarter=${quarter}`);

      return response.data.data || {};
    } catch (e) {
      console.log("Axios Error", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuarterData(selectedQuarter);
      setQuarterData(data);
    };
    fetchData();
  }, [selectedQuarter]);

  return (
    <div className="flex flex-col items-center">
      <Dropdown
        quarters={quarters}
        selectedQuarter={selectedQuarter}
        onSelectQuarter={setSelectedQuarter}
      />
      {/* {quarterData && (
        <QuarterTile
          quarter={selectedQuarter}
          revenue={quarterData.revenue}
          netIncome={quarterData.netIncome}
          netProfit={quarterData.netProfit}
          operatingIncome={quarterData.operatingIncome}
        />
      )} */}

      {isLoading ? (
        <div className="border p-4 m-4 w-64">
          <Loader />
        </div>
      ) : quarterData ? (
        <QuarterTile
          quarter={selectedQuarter}
          duration={quarterData.duration}
          revenue={quarterData.revenue}
          netIncome={quarterData.netIncome}
          netProfit={quarterData.netProfit}
          operatingIncome={quarterData.operatingIncome}
        />
      ) : null}
    </div>
  );
};

export default App;
