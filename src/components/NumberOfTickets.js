import React, { useContext } from 'react';
import { TestContext } from '../App';

const NumberOfTickets = () => {

  const testContext = useContext(TestContext)

  return (
    <div>
      <label>Количество билетов </label>
      <input
        onChange={(e) => testContext.dispatch({
          type: 'GET_NUMBER_OF_TICKETS',
          payload: e.target.value
        })}
      />
      <button onClick={() => testContext.dispatch({ type: 'COUNT' })}>Посчитать</button>
    </div>
  )
}

export default NumberOfTickets