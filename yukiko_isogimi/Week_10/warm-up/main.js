console.log("hello world");

const reverse = (string) => {
  newString = string.split("").reverse().join('')
  return newString
}

console.log(reverse("hello"));

const oddNumber = (num) => {
  for( let i = 1; i < num; i++){
    if(i % 2 === 0){
      console.log(i);
    }
  }
}

console.log(oddNumber(100));

const maxNum = (array) => {
  findMax = Max()
}

///aleks version

const revString = (str) => {
  let out = '';
  for (let i = str.length - 1; i >= 0; i--){
    out += str[i]
  }
  return out;
}

console.log('\nreverse string:', reverse('stuff'));

const odds = () => {
  let out = [];
  let num = 1;
  while(num =< 99){
    out.push(num);
    num += 2;
  }
  return out.join(', ');
}

console.log('\nOdds:', odds());

const largest = (arr) => {
  return arr.sort((a,b)=> a - b)[arr.length - 1];
};

console.log(
  '\nLargest number:',
  largest([332,232,456,134,123,231232])
);


const fib = (left, curr = 1, prev = 1) => {
  if (left === 1 || left === 2) return curr
   return fib(left - 1, curr + prev, curr);
};

console.log('\nFibonnacci:', fib(6));
