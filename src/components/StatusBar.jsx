import React from "react";

const Card = ({ heading, details, border }) => {
  return (
    <div className={`w-[16%] p-4 ${border ? "border-r-2" : ""}`}>
      <p className="text-slate-600">{heading}</p>
      <p className="font-bold text-slate-800">{details}</p>
    </div>
  );
};

const StatusBar = () => {
  const data = [
    {
      heading: "Supplier",
      details: "East coast fruits & vegetables",
      border: true,
    },
    { heading: "Shipping Date", details: "Thu, Feb 10", border: true },
    { heading: "Total", details: "$15,028.3", border: true },
    { heading: "Category", details: "lorem", border: true },
    { heading: "Department", details: "300-444-678", border: true },
    { heading: "Status", details: "Awaiting for approval", border: false },
  ];
  return (
    <div className="max-w-7xl mx-auto my-8 min-h-32 border-2 p-4 rounded-lg flex justify-evenly">
      {data.map((obj, ind) => (
        <Card key={ind} {...obj} />
      ))}
    </div>
  );
};

export default StatusBar;
