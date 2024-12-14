import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowData from "../components/ShowData";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-link" onClick={() => navigate("/")}>
          Back to Login
        </button>
      </form>
      {showTable && <ShowData name={name} email={email} />}
    </div>
  );
}

export default Register;
