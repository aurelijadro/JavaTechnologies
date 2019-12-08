import React, { useState } from "react";
import { useMyData } from "../context";

export default function Login() {
  const { login } = useMyData();
  const [userName, setUserName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    login(userName);
  };

  return (
    <form className="col-6" onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          required
          className="form-control col-8"
          placeholder="Username"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        ></input>
        <button className="btn btn-info col-4" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
