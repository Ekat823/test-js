import React, { useContext } from 'react';
import { TestContext } from '../App';

const Direction = () => {

  const testContext = useContext(TestContext)

  return (
    <div>
      <label>Выберите направление </label>
      <select
        onChange={(e) => testContext.dispatch({
          type: 'SELECT_DIRECTION',
          payload: e.target.value
        })}
      >
        {testContext.state.selectDirection.map((el, i) =>
          <option key={i} value={el}>{el}</option>
        )}
      </select>
    </div>
  )
}

export default Direction