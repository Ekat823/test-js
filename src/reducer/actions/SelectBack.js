const selectBack = (state, action) => {
  const back = action.payload;
  return { ...state, count: false, back: back };
}

export default selectBack