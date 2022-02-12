import actionTypes from "../constants/actionTypes";



export const changeStatusModal = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.MODAL });
  } catch {
    console.log("error");
  }
};

export const changeStatusBackground = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.CHANGE_BACKGROUND });
  } catch {
    console.log("error");
  }
};

export const changeStatusMenu = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.CHANGE_STATUS_MENU });
  } catch {
    console.log("error");
  }
};
export const getDetail = (status, id) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DETAIL, status, id });
  } catch {
    console.log("error");
  }
};
export const handleClickModal = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.HANDEL_CLICK_MODAL });
  } catch {
    console.log("error");
  }
};

export const handleClickSetting = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.HANDEL_CLICK_SETTING });
  } catch {
    console.log("error");
  }
};
