const initialState = {
  order: []
};

const lunchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'orderLunch':
      return action.payload;
    case 'deleteLunch':
      return state.order.filter((element) => element !== action.payload);
    default:
      return state;
  }
};
export default lunchDataReducer;
