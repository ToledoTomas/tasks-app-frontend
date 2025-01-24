import React from "react";
import Card from "./Card";

const Status = ({ title }) => {
  const color =
    title === "BACKLOG"
      ? "text-red-500"
      : title === "PENDIENTE"
      ? "text-yellow-500"
      : "text-green-500";
  return (
    <div>
      <h1 className={`text-xl font-semibold ${color}`}>{title}</h1>
      <section>
        <Card filterStatus={title}/>
      </section>
    </div>
  );
};

export default Status;
