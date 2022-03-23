## ☁️ async / await
#### 🔹 async
- promise처럼 비동기를 다루는 기능, promise를 더 쉽게 이용할 수 있도록 도와줌 
```javascript
function hello() {
    return "hello";
}

async function helloAsync() {
    return "hello Async"; // promise 리턴 
}
// 함수에 async 키워드를 붙이면 함수는 promise를 리턴하는 비동기 처리 함수가 됨 

helloAsync().then((res) => {
    console.log(res);
});
// async 키워드를 붙인 함수의 리턴값은 비동기 작업 객체 promise의 resolve의 결과값이 됨. 그래서 "hello Async" 값이 res에 들어온 것.
```

#### 🔹 await
```javascript
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function helloAsync() {
    await delay(3000); 
    return "hello Async";
}
// await 키워드를 비동기 함수의 호출 앞에 붙이면 비동기함수가 동기함수처럼 작동하게 됨
// await 키워드가 붙은 함수의 호출은 함수가 끝나기 전까지 아래의 코드를 수행하지 않는다는 뜻
// await 키워드는 async 키워드가 붙은 함수 내에서만 사용 가능 

// async function helloAsync() {
//     return delay(3000).then(() => {
//         return "hello Async";
//     });
// } 를 await을 이용해 변경한 코드 

async function main() {
    const res = await helloAsync();
    console.log(res);
}
main(); // "hello Async"가 3초 뒤 출력됨

// helloAsync().then((res) => {
//     console.log(res);
// }); 를 await을 이용해 변경한 코드 
```
