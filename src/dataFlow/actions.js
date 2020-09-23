import axios from "axios";
export const GET_CHAMP_DATA = "GET_CHAMP_DATA";
export const GET_CHAMP_STARTED = "GET_CHAMP_STARTED";
export const GET_CHAMP_SUCESS = "GET_CHAMP_SUCESS";
export const GET_CHAMP_FAILURE = "GET_CHAMP_FAILURE";

export const getChampData = () => {
  return async (dispatch) => {
    dispatch(getChampStarted());

    axios
      .get("http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion/Urgot.json")
      .then((res) => {
        setTimeout(() => {
          dispatch(getChampSucess(res.data));
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

const getChampSucess = (data) => {
  return {
    type: GET_CHAMP_SUCESS,
    payload: {
      ...data
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
