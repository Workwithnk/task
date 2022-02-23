import React from "react";
import { useNavigate } from "react-router-dom";
import NewUser from "./NewUser";
import "../CSS/Home.css";

function SingleRow({ id, name, P5H, RewardH }) {
  const navigation = useNavigate();
  const handleViewUser = () => {
    navigation(`/new/${id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{P5H}</td>
      <td> {RewardH}</td>

      <td>
        <button className="editBtn">edit </button>
        <br />
        <button onClick={handleViewUser} className="editBtn">
          ViewButton
        </button>
      </td>
    </tr>
  );
}

export default SingleRow;
