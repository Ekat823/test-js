const selectDirection = (state, action) => {
  const direction = action.payload;
  return { ...state, count: false, direction: direction };
}

export default selectDirection
