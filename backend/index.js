const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.get("/getQuarterData", (req, res) => {
  const quarter = req.query.quarter;

  const hardcodedData = {
    Q1: {
      duration: "Dec 22",
      revenue: "716.57 B",
      netIncome: "154.77 B",
      netProfit: "21.60%",
      operatingIncome: "213.55 B",
    },
    Q2: {
      duration: "Mar 23",
      revenue: "607.66 B",
      netIncome: "180.94 B",
      netProfit: "29.78%",
      operatingIncome: "049.95 B",
    },
    Q3: {
      duration: "Jun 23",
      revenue: "711.87 B",
      netIncome: "185.37 B",
      netProfit: "26.04%",
      operatingIncome: "252.08 B",
    },
    Q4: {
      duration: "Sep 23",
      revenue: "805.33 B",
      netIncome: "161.00 B",
      netProfit: "19.99%",
      operatingIncome: "219.36 B",
    },
  };

  const quaterData = hardcodedData[quarter];

  if (quaterData) {
    res.status(200).send({
      data: quaterData,
    });
  } else {
    res.status(400).send("Data is not available for this quarter..");
  }
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
