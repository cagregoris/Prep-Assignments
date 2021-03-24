
const repeatNumbers = function(data) {
  let string = [];
  for(x = 0; x < data.length; x++) {
    let a = data[x][0];
    let b = data[x][1];
    for(let i = b; i > 0; i--) {
      string += a;
      if(i === 1) {
        string += ", "
      }
    }
  }
  return string;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
