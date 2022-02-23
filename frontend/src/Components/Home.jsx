import React, { useState, useEffect } from "react";

import "../CSS/Home.css";
import SingleRow from "./SingleRow";

function Home() {
  let [data, setData] = useState([]);

  let fetchUser = async () => {
    let responce = await fetch("http://localhost:8000/newuser");
    let result = await responce.json();
    setData(result);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="Home">
      <table>
        <thead>
          <tr>
            <td>#id</td>
            <td>Name</td>
            <td>P5 balance</td>
            <td>Reward balance </td>
            <td>Login</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <SingleRow
                id={item._id}
                name={item.name}
                P5H={item.P5.balance}
                key={index}
                RewardH={item.Reward.balance}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
