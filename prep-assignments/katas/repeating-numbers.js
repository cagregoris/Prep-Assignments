
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

/*
var repeatNumbers = function(data) {
  var string = [];
  for ( var x = 0; x < data.length; x++){
  var a = data[x][0];
  var b = data[x][1];
  for(var i = b; i > 0; i--){
  string += a;
  if(i === 1){
  string += ',';
  }
  }
  var array = [];
  array.push(string);
  }
  return array;
  }
*/ 
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
