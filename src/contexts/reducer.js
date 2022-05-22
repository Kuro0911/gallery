export const initialState = {
  Photodata: [{}],
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        Photodata: action.Photodata,
      };
    default:
      return state;
  }
};

export default reducer;
