const isEmpty = require("is-empty");
const state = {
  isAuthenticated: "no",
  user: [],
};
function CounterReducer(initialState = state, action) {
  console.log(action.type);
  switch (action.type) {
    case "USER_ADDED":
      return {
        ...initialState,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    case "USER_LOGIN":
      return {
        ...initialState,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return initialState;
  }
}

export default CounterReducer;
