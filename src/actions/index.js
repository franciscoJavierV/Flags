import axios from 'axios';

export const setData = payload => ({
  type: 'SET-DATA',
  payload,
});

export const setSingleData = payload => ({
  type: 'SET-SINGLE-DATA',
  payload,
});

//not completed yet
export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

//FETCH ACTION
export const getData = payload => {
  const limit = 15; //consts should be on a single archive
  const offset = payload;
  console.log(payload);
  return dispatch => {
    //fetch to backend register service
    axios
      .get(`https://restcountries.com/v2/all`)
      .then(payload => dispatch(setData(payload.data)))
      .catch(err => dispatch(setError(err)));
  };
};

export const getActualData = data => {
  return dispatch => {
    axios.get(`${'url'}${data}`).then(({ data }) => {
      dispatch(setActualData(data));
    });
  };
};

export { setError as default };
