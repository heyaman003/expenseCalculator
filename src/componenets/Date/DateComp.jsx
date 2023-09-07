import React from "react";
import "./Date.css";
const DateComp = ({ date }) => {
  const dat = new Date(date);
  const month = dat.toLocaleString("en-US", { month: "long" });
  const year = dat.toLocaleString("en-US", { year: "numeric" });
  const day = dat.toLocaleString("en-US", { day: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default DateComp;
