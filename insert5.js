function insert5(number) {
  let copy = number.toString().split('');
  let res = [];
  console.log(copy)
  for (let i = 0; i < copy.length; i++) {
    let currNum = parseInt(copy[i]);
    
    if (number >= 0) {
      if (5 > currNum) {
        res = [...copy.slice(0,i), 5, ...copy.slice(i)];
        continue;
      }
      if (5 < currNum) {
        res = [...copy.slice(0,i), 5, ...copy.slice(i)];
        break;
      }
    }
  }
  return parseInt(res.join(''))
};


console.log(insert5(826)) //=> 8526
