function loopyLighthouse(range, multiples, words) {
  let x = range[0];
  let y = range[1];
  let j = multiples[0];
  let k = multiples[1];
  let a = words[0];
  let b = words[1];
  for(let i = x; i <= y; i++) {
    if(i % j === 0) {
      console.log(a)
    } else if(i % j !==0 && i % k === 0) {
      console.log(b)
    } else {
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Bacon"]);