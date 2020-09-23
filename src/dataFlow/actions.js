import axios from "axios";
export const GET_CHAMP_DATA = "GET_CHAMP_DATA";
export const GET_CHAMP_STARTED = "GET_CHAMP_STARTED";
export const GET_CHAMP_SUCESS = "GET_CHAMP_SUCESS";
export const GET_CHAMP_FAILURE = "GET_CHAMP_FAILURE";

export const getChampData = (uri, selectedChamp) => {
  console.log("[ACTION] getChamp selected", selectedChamp)
  return async (dispatch) => {
    dispatch(getChampStarted());

    axios
      .get(uri)
      .then((res) => {
        setTimeout(() => {
          dispatch(getChampSucess(res.data, selectedChamp));
        }, 2000)
        
      })
      .catch((err) => {
        dispatch(getChampFailure(err.message));
      });
  };
};

const getChampStarted = () => {
  return {
    type: GET_CHAMP_STARTED
  };
};

const getChampSucess = (data, selectedChamp) => {
  console.log("[ACTION] selected", selectedChamp)
  return {
    type: GET_CHAMP_SUCESS,
    selectedChamp: selectedChamp,
    payload: {
      ...data,
    }
  };
};

const getChampFailure = (err) => {
  console.log("err: ", err);
  return {
    type: GET_CHAMP_FAILURE,
    payload: {
      err
    }
  };
};
