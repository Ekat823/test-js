const getInitialState = () => ({
  selectDirection: ['из A в B', 'из B в A', 'из A в B и обратно в А'],
  direction: 'из A в B',
  selectTimeA: ['18:00', '18:30', '18:45', '19:00', '19:15', '21:00'],
  selectTimeB: ['18:30', '18:45', '19:00', '19:15', '19:35', '21:50', '21:55'],
  time: '18:00',
  selectBack: ['19:00', '19:15', '19:35', '21:50', '21:55'],
  back: '19:00',
  numOfTickets: 0,
  count: false,
  oneWayCost: 700,
  roundTripCost: 1200,
  price: 0,
  tripLengthHours: '00',
  tripLengthMin: '00',
  arrivalTime: '00:00',
  arrivalTimeBack: '00:00',
})

export default getInitialState