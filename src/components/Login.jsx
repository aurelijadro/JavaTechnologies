import React, { useState } from "react";
import { AppDataContext } from "../context";

export default function Login() {
  const appData = React.useContext(AppDataContext);
  const { users } = appData;
  const [userName, setUserName] = useState("");
  const handleUserChange = event => {
    setUserName(event.target.value);
    console.log(userName);
  };
  return (
    <div className="col-6">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={userName}
        onChange={handleUserChange}
      ></input>
    </div>
  );
}
