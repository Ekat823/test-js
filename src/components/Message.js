import React, { useContext } from 'react';
import { TestContext } from '../App';

const Message = () => {

  const testContext = useContext(TestContext);

  return (
    <div>
      {testContext.state.direction === 'из A в B и обратно в А' ?
        <p>Вы выбрали {testContext.state.numOfTickets} билета по маршруту {testContext.state.direction} стоимостью {testContext.state.price}.<br />
          Это путешествие займет у вас {testContext.state.tripLengthHours} ч. {testContext.state.tripLengthMin} мин.<br />
          Теплоход отправляется в {testContext.state.time}, а прибудет в {testContext.state.arrivalTime}. <br />
          Обратно теплоход отпавляется в {testContext.state.back} и прибудет в {testContext.state.arrivalTimeBack}.</p>
        : <p>Вы выбрали {testContext.state.numOfTickets} билета по маршруту {testContext.state.direction} стоимостью {testContext.state.price}.<br />
          Это путешествие займет у вас 50 минут.<br />
          Теплоход отправляется в {testContext.state.time}, а прибудет в {testContext.state.arrivalTime}.</p>
      }
    </div>
  )
}

export default Message