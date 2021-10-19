import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTextStatus } from "../../store/profile/selector";
import { getDataApi, getErrorApi, getLoadingApi } from "../../store/GitApi";
import { reqGit } from "../../store/GitApi";

export const HomePage = () => {
  const dispatch = useDispatch();
  const textStatus = useSelector(getTextStatus);

  const loadingApi = useSelector(getLoadingApi).toString();
  const errorApi = useSelector(getErrorApi).toString();
  const dataApi = useSelector(getDataApi);
  console.log(dataApi);

  useEffect(() => {
    dispatch(reqGit());
  }, [dispatch]);

  return (
    <div>
      <h1>{textStatus}</h1>
      <div>Loading: {loadingApi}</div>
      <br />
      <div>Error: {errorApi} </div>
      <br />
      <div>
        gitData:{dataApi.id}
        <button
          onClick={() => {
            dispatch(reqGit());
          }}
        >
          request
        </button>
      </div>
    </div>
  );
};
