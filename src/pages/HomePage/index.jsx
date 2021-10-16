import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTextStatus } from "../../store/profile/selector";
import { getWaetherState } from "../../store/GitApi";
import { reqGit } from "../../store/GitApi";

export const HomePage = () => {
  const dispatch = useDispatch();

  const textStatus = useSelector(getTextStatus);

  const gitData = useSelector(getWaetherState);
  console.log(gitData.data.url);

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
          Change
        </button>
      </div>
    </div>
  );
};
