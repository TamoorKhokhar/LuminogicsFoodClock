export const sign_up = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'signUp',
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

export const sign_In = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'signIn',
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

export const user_Order = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'order',
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
export const all_Orders = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'orderRecord',
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
