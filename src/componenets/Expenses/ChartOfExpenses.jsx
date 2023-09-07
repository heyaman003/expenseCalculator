import React from "react";
import Charts from "../Charts/Charts";

const ChartOfExpenses = ({ filterExpense }) => {
       
  const datapoints = [
    { lable: "jan", value: 0 },
    { lable: "feb", value: 0 },
    { lable: "mar", value: 0 },
    { lable: "apr", value: 0 },
    { lable: "may", value: 0 },
    { lable: "jun", value: 0 },
    { lable: "jul", value: 0 },
    { lable: "aug", value: 0 },
    { lable: "sep", value: 0 },
    { lable: "oct", value: 0 },
    { lable: "nov", value: 0 },
    { lable: "dec", value: 0 },
  ];
  console.log(filterExpense.length);
       for (const exp in filterExpense) {
              const date = new Date(filterExpense[exp].date);
              const month = date.getMonth();
          
              datapoints[month].value = datapoints[month].value + 1;
            }
     
  return <Charts dataPoints={datapoints} />;
};

export default ChartOfExpenses;
