import React, { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks";

const Card = ({ filterStatus }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTasksRequest()
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 justify-items-center">
        {data
          .filter(task => task.status === filterStatus)
          .map(task => (
            <div key={task.id} className="border p-4 rounded shadow">
              <h1 className="text-xl font-semibold">{task.user.username}</h1>
              <h3 className="text-lg font-semibold">
                Título: <span className="font-normal">{task.title}</span>
              </h3>
              <p className="text-sm font-semibold">
                Descripción:{" "}
                <span className="font-normal">{task.description}</span>
              </p>
              <p className="text-sm font-semibold">
                Estado: <span className="font-normal">{task.status}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
