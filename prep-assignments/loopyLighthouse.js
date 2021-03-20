let i = 100
while(i <= 200) {
  if(i % 12 === 0) {
    console.log('LoopyLighthouse');
  } else if(i % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(i)
  }
  i++
}

/*
OR

for(let i = 100; i <= 200; i++) {
  if(i % 12 === 0) {
    console.log('LoopyLighthouse');
  } else if(i % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(i)
  }
}
*/