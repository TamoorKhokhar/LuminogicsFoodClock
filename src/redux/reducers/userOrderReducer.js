const initialState = {
  order: []
};
const userOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'order':
      return action.payload;
    default:
      return state;
  }
};
export default userOrderReducer;
