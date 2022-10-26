const getNumberOfTickets = (state, action) => {
  const numOfTickets = action.payload;
  return { ...state, count: false, numOfTickets: numOfTickets };
}

export default getNumberOfTickets