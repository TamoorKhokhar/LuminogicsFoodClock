const initialState = {
  signUp: []
};
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signUp":
      return {
        ...state,
        signUp: [...state.signUp, action.payload]
      };
    default:
      return state;
  }
};
export default signUpReducer;
