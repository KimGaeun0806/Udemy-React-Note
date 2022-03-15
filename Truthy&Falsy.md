## ☁️ Truthy & Falsy - 참 같은 값, 거짓 같은 값
#### ▶️ 자바스크립트가 자신만의 특정한 기준으로 값을 참이나 거짓으로 분류 

</br>

#### ▶️ 참으로 평가하는 값들 
#### &nbsp;&nbsp;&nbsp; - 빈 중괄호, 즉 객체 리터럴 ( {} )
#### &nbsp;&nbsp;&nbsp; - 숫자 ( 42 )
#### &nbsp;&nbsp;&nbsp; - 문자열 ( "0", "false" )
#### &nbsp;&nbsp;&nbsp; - 양의 무한대 ( Infinity )

</br>

#### ▶️ 거짓으로 평가하는 값들 
#### &nbsp;&nbsp;&nbsp; - null 
#### &nbsp;&nbsp;&nbsp; - undefined
#### &nbsp;&nbsp;&nbsp; - 숫자 0, -0
#### &nbsp;&nbsp;&nbsp; - NaN 
#### &nbsp;&nbsp;&nbsp; - 빈 문자열 ( "" )

</br>

#### ▶️ Truthy, Falsy 활용하는 법  
#### &nbsp;&nbsp;&nbsp; - 파라미터가 객체인 경우 문제 x 
```javascript
const getName = (person) => {
    return person.name;
};

let person = { name: "우지호" };
const name = getName(person);
console.log(name); // 우지호 
```
#### &nbsp;&nbsp;&nbsp; - person이 undefined나 null일 경우 -> 전달받은 파라미터가 객체인지 아닌지 판단해야 함 
```javascript
const getName = (person) => {
    if (!person) { // undefined, null은 falsy한 값. false에 NOT을 붙이면 True가 되는 것을 활용 
        return "객체가 아닙니다"
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
