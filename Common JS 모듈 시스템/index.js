const calc = require('./calc'); // calc 모듈 불러오기
// require와 module.exports는 node js에 있는 내장함수라서 바닐라 js에서는 사용할 수 x

console.log(calc);
/*{
  moduleName: 'calc module',
  add: [Function: add],     
  sub: [Function: sub]      
}*/

console.log(calc.add(4, 5)); // 9
console.log(calc.sub(10, 2)); // 8
