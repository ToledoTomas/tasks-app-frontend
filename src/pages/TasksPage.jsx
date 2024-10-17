import React, { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks";

const TasksPage = () => {
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

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {data.map(task => {
          return (
            <div key={task.id}>
              <h1>Id: {task.id}</h1>
              <h1>Title: {task.title}</h1>
              <p>Description: {task.description}</p>
              <p>Status: {task.status}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TasksPage;
