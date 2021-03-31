const args = process.argv;

const sliced = args.slice(2);

  let string = ""
  for(x = 0; x < sliced; x++) { 
    number = (Math.floor(Math.random() * 6) + 1)
    string = string + number + ", "
  }
  console.log("Rolled " + sliced + " dice: " + string);


  

  