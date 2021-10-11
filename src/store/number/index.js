const initialState = { value: 0 };

export const counterReducer = (state = initialState, action) => {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
};

export const getNumber = (store) => store.value || 0;

export const cardsSelectors = {
  getNumber,
};
