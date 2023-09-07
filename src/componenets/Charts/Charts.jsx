import React from "react";
import "./Charts.css";
import ChartBar from "./ChartBar";
const Charts = ({ dataPoints }) => {
      let max=null;
      dataPoints.forEach(element => {
         max=Math.max(element.value,max);
      });
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return <ChartBar key={dataPoint.lable}  value={dataPoint.value} 
        maxValue={max}
        lable={dataPoint.lable}/>;
      })}
   
    </div>
  );
};

export default Charts;
