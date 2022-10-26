import React, { useContext } from 'react';
import { TestContext } from '../App';

const Back = () => {
  
  const testContext = useContext(TestContext)
  
  return (
    <div>
      <label>Обратно </label>
      <select
        onChange={(e) => testContext.dispatch({
          type: 'SELECT_BACK',
          payload: e.target.value
        })}
      >
        {testContext.state.selectBack.map((el, i) =>
          <option key={i} value={el}>{el}</option>
        )}
      </select>
    </div>
  )
}

export default Back