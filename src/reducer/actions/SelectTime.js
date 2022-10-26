const selectTime = (state, action) => {
  const time = action.payload;
  const arrTime = time.split(':');
  const timeInMin = Number(arrTime[0]) * 60 + Number(arrTime[1]) + 50;
  let backTime = [];
  const arrBack = state.selectTimeB;
  
  for (let i = 0; i < arrBack.length; i++) {
    let x = (arrBack[i].split(':'));
    let y = Number(x[0]) * 60 + Number(x[1])
    if (y > timeInMin) {
      const min = (y % 60);
  const hour = ((y - (y % 60)) / 60);
      backTime.push(hour.toString() + ':' + min.toString());
    }
  }
  

  return { ...state, count: false, time: time, selectBack: backTime, back: backTime[0] };
}

export default selectTime