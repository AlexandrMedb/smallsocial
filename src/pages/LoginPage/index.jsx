import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { rootRef } from "../../services/firebase";
import { auth } from "../../services/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { push } = useHistory();

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await auth.signInWithEmailAndPassword(email, password);
      push("/profile");
    } catch (error) {
      setError(error.message);
    }
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

          auth.signOut();

          // @TODO: сюда код
        }}
      >
        exit
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
          You have`t account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
