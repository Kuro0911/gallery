export const initialState = {
  Photodata: [{}],
  query: "",
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
  SET_QUERY: "SET_QUERY",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        Photodata: action.Photodata,
      };
    case actionTypes.SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export default reducer;
