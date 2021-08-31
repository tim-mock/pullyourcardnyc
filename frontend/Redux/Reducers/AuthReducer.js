import * as types from "../Types";

const initialState = {
  isSignedIn: true,
  name: "carl weezer",
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, isSignedIn: true };
    default:
      return state;
  }
}

export default AuthReducer;
