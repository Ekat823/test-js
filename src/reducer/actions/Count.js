const count = (state) => {
  let price = state.price;
  const time = state.time;
  const back = state.back;
  const arrTime = time.split(':');
  const arrTimeBack = back.split(':');
  const timeInMin = Number(arrTime[0]) * 60 + Number(arrTime[1]) + 50;
  const backTimeInMin = Number(arrTimeBack[0]) * 60 + Number(arrTimeBack[1]) + 50;
  const min = (timeInMin % 60);
  const hour = ((timeInMin - (timeInMin % 60)) / 60);
  const minBack = (backTimeInMin % 60);
  const hourBack = ((backTimeInMin - (backTimeInMin % 60)) / 60);
  const arrivalTime = hour.toString() + ":" + min.toString();
  const arrivalTimeBack = hourBack.toString() + ":" + minBack.toString();
  const tripLength = backTimeInMin - timeInMin;
  const tripLengthHours = ((tripLength - (tripLength % 60)) / 60);
  const tripLengthMin = (tripLength % 60);

  if (state.direction === 'из A в B и обратно в А') {
    price = state.roundTripCost * state.numOfTickets;
  } else {
    price = state.oneWayCost * state.numOfTickets;
  }


  return {
    ...state,
    count: true,
    price: price,
    arrivalTime: arrivalTime,
    arrivalTimeBack: arrivalTimeBack,
    tripLengthHours: tripLengthHours,
    tripLengthMin: tripLengthMin,
  };
}

export default count