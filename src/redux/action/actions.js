export const sign_up = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "signUp",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

export const sign_In = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "signIn",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
