const initialState = {
  record: []
};
const allOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'orderRecord':
      return {
        ...state,
        record: [action.payload]
      };
    default:
      return state;
  }
};
export default allOrderReducer;
