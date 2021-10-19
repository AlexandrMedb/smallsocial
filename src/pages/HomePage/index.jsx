import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { getTextStatus } from "../../store/profile/selector";
import { getWaetherState } from "../../store/GitApi";
import { reqGit } from "../../store/GitApi";

export const HomePage = () => {
  const dispatch = useDispatch();

  const textStatus = useSelector(getTextStatus);

  const gitData = useSelector(getWaetherState);

  return (
    <div>
      <h1>{textStatus}</h1>
      <div>Loading: {gitData.loading.toString()}</div>
      <br />
      <div>Error: {gitData.error.toString()} </div>
      <br />
      <div>
        gitData:{gitData.data.url}
        <button
          onClick={() => {
            dispatch(reqGit());
          }}
        >
          request
        </button>
      </div>

      <h3>Home</h3>
      <div>
        <Link to="/login">Sign In</Link>
      </div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
