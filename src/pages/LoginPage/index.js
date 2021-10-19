import React, { useState } from "react";
import { Link } from "react-router-dom";

import { rootRef } from "../../services/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // try {
    //   await firebase.auth().createUserWithEmailAndPassword(email, password);
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    <div>
      <button
        onClick={() => {
          rootRef.set({
            ke1: "разобрался",
            key2: "разобрался ",
          });

          // @todo:
        }}
      >
        Set
      </button>
      <button
        onClick={async () => {
          rootRef.child("test1").set({
            ke22: "ex2",
            key2: "sadaa",
          });
          let a = await rootRef.child("Atarasov");
          console.log(a);
          console.log("22");
          // @TODO: сюда код
        }}
      >
        Set
      </button>
      <form onSubmit={handleSubmit}>
        <p>Fill in the form below to register new account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </div>
        <hr />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};
