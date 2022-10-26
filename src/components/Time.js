import React, { useContext } from 'react';
import { TestContext } from '../App';

const Time = () => {

  const testContext = useContext(TestContext)

  return (
    <div>
      <label>Выберите время </label>
      <select
        onChange={(e) => testContext.dispatch({
          type: 'SELECT_TIME',
          payload: e.target.value
        })}
      >
        {testContext.state.direction === 'из B в A' ?
          testContext.state.selectTimeB.map((el, i) =>
            <option key={i} value={el}>{el}</option>)
          : testContext.state.selectTimeA.map((el, i) =>
              <option key={i} value={el}>{el}</option>)
        }
      </select>
    </div>
  )
}

export default Time