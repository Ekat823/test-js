import React, { useReducer } from 'react';
import getInitialState from './state/GetInitialState';
import reducer from './reducer/Reducer';
import Direction from './components/Direction';
import Time from './components/Time';
import NumberOfTickets from './components/NumberOfTickets';
import Back from './components/Back';
import Message from './components/Message';

export const TestContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  return (
    <TestContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Direction />
      <Time />
      {state.direction === 'из A в B и обратно в А' ? <Back /> : null}
      <NumberOfTickets />
      {state.count ? <Message /> : null}
    </TestContext.Provider>
  );
}

export default App;
