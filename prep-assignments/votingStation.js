const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
  const goodStations = [];
  for(let i = 0; i < stations.length; i++) {
    const capacity = stations[i][1];
    if(capacity >= 20) {
      const type = stations[i][2]
      if(type === 'school' || type === 'community centre') {
        goodStations.push(stations[i][0]);
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));

/*

OR

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
let station;
function chooseStations(stations) {
  const goodStations = [];
  for(station of stations) {
    const capacity = station[1];
    if(capacity >= 20) {
      const type = station[2]
      if(type === 'school' || type === 'community centre') {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
} 

console.log(chooseStations(stations));

*/

