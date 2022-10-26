import selectDirection from "./actions/SelectDirection";
import selectTime from "./actions/SelectTime";
import selectBack from "./actions/SelectBack";
import getNumberOfTickets from "./actions/GetNumberOfTickets";
import count from "./actions/Count";

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_DIRECTION':
      return selectDirection(state, action)
    case 'SELECT_TIME':
      return selectTime(state, action)
    case 'SELECT_BACK':
      return selectBack(state, action)
    case 'GET_NUMBER_OF_TICKETS':
      return getNumberOfTickets(state, action)
    case 'COUNT':
      return count(state, action)
  }
}

export default reducer