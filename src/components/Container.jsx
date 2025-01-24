import React from "react";
import Status from "./Status";

const Container = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 h-screen">
      <Status title="BACKLOG" />
      <Status title="PENDIENTE" />
      <Status title="COMPLETADO" />
    </div>
  );
};

export default Container;
