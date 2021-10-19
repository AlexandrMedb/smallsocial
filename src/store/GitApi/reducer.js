import { Set_GitData, Set_Error, Set_Loading } from "./actions";

const initialState = {
  error: false,
  loading: false,
  data: {},
};

export const gitReducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_Error: {
      return { ...state, error: action.payload };
    }
    case Set_Loading: {
      return { ...state, loading: action.payload };
    }
    case Set_GitData: {
      return { ...state, data: action.payload };
    }

    default: {
      return state;
    }
  }
};
