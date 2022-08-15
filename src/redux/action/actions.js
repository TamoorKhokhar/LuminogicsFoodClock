export const sign_up = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'signUp',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const sign_In = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'signIn',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const user_Order = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'order',
      payload: text
    });
  } catch (err) {
    return err;
  }
};
export const all_Orders = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'orderRecord',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const lunchRecord = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'lunchRecord',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const eveningRecord = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'eveningRecord',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const order_delete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'delete',
      payload: id
    });
  } catch (err) {
    return err;
  }
};

export const eveningOrderItem = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'orderTea',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const eveningOrderDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'deleteTea',
      payload: id
    });
  } catch (err) {
    return err;
  }
};

export const lunchOrderItem = (text) => async (dispatch) => {
  try {
    dispatch({
      type: 'orderLunch',
      payload: text
    });
  } catch (err) {
    return err;
  }
};

export const lunchOrderDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'deleteLunch',
      payload: id
    });
  } catch (err) {
    return err;
  }
};
