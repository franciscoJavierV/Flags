const reducer = (state, action) => {
  switch (action.type) {
    case 'SET-DATA':
      return {
        ...state,
        countries: action.payload,
      };
    case 'SET-SINGLE-DATA':
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
