const initialState = {
  record: []
};

const lunchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'lunchRecord':
      return {
        ...state,
        record: [action.payload]
      };
    default:
      return state;
  }
};
export default lunchResultReducer;
