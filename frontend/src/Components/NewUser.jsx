import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/NewUser.css";

function NewUser() {
  let [nameInp, setNameInp] = useState({
    name: "",
    P5: {
      balance: 100,
      history: [],
    },
    Reward: {
      balance: 0,
      hitory: [],
    },
  });

  const navigation = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    let { name, P5, Reward } = nameInp;
    let responce = fetch("http://localhost:8000/newuser/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        P5,
        Reward,
      }),
    })
      .then((data) => {
        if (data.status === 201) {
          setNameInp({
            name: "",
            P5: 100,
            Reward: 0,
          });
          navigation("/");
        } else {
          setNameInp({
            name: "",
            P5: 100,
            Reward: 0,
          });
          navigation("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    console.log("save");
    navigation("/");
  };

  return (
    <div className="NewUser">
      <form className="form_NU">
        <input
          type="text"
          value={nameInp.name}
          onChange={(e) => setNameInp({ ...nameInp, name: e.target.value })}
          placeholder="enter Name"
        />
        <div className="btnCon_NU">
          <button disabled={!nameInp} className="saveBtn" onClick={handleSave}>
            save
          </button>
          <button
            disabled={!nameInp}
            className="cancelBtn"
            onClick={handleCancel}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
