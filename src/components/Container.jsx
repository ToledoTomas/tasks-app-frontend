import React from "react";
import Status from "./Status";

const Container = () => {
  return (
    <div>
      <Status title="BACKLOG" />
      <Status title="PENDIENTE" />
      <Status title="COMPLETADO" />
    </div>
  );
};

export default Container;
