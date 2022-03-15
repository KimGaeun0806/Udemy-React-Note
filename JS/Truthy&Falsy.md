## ☁️ Truthy & Falsy 
#### 🔹 자바스크립트가 자신만의 특정한 기준으로 값을 참이나 거짓으로 분류 
 
#### 🔹 참으로 평가하는 값들 (Truthy)
- 빈 중괄호, 즉 객체 리터럴 ( {} )
- 숫자 ( 42 )
- 문자열 ( "0", "false" )
- 양의 무한대 ( Infinity )

#### 🔹 거짓으로 평가하는 값들 (Falsy)
- null 
- undefined
- 숫자 0, -0
- NaN 
- 빈 문자열 ( "" )

#### 🔹 Truthy, Falsy 활용하는 법  
- 파라미터가 객체인 경우 문제 x 
```javascript
const getName = (person) => {
    return person.name;
};

let person = { name: '우지호' };
const name = getName(person);
console.log(name); // 우지호 
```
- person이 undefined나 null일 경우 -> 전달받은 파라미터가 객체인지 아닌지 판단해야 함 
```javascript
const getName = (person) => {
    if (!person) { // undefined, null은 falsy한 값. false에 NOT을 붙이면 true가 되는 것을 활용 
        return '객체가 아닙니다'
    }
    return person.name;
};

// if (person === undefined || person === null) {
//     return "객체가 아닙니다"
// } 
// 같은 조건식보다 훨씬 간단하게 해결 가능     

let person;
const name = getName(person);
console.log(name); // 객체가 아닙니다
```
