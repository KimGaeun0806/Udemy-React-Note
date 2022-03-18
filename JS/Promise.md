## ☁️ Promise  
#### 🔹 연속되는 비동기 함수들을 처리할 때 비동기 처리의 결과값을 사용하기 위해서 콜백이 계속 깊어지는 콜백 지옥을 해결할 수 있는 객체 
#### 🔹 JS의 비동기를 돕는 객체. 비동기 처리의 결과값을 핸들링하는 코드를 비동기 함수로부터 분리할 수 있음. 
#### 🔹 비동기 처리의 가독성 향상을 도움 
#### 🔹 비동기 작업이 가질 수 있는 3가지 상태
- Pending (대기 상태)
- Fulfilled (성공) -> Pending에서 Fulfilled이 되는 과정을 resolve (해결)이라고 함 
- Rejected (실패) -> Pending에서 Rejected이 되는 과정을 reject (거부) 라고 함 
#### 🔹 콜백함수를 이용한 비동기 처리 
```javascript
function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') { // 성공 -> resolve 
            resolve(number >= 0 ? '양수' : '음수');
        } else { // 실패 -> reject 
            reject('주어진 값이 숫자형이 아닙니다.');
        }
    }, 2000);
}

isPositive(
    10,
    (res) => {
        console.log('성공적으로 수행됨: ', res);
    },
    (err) => {
        console.log('실패함: ', err);
    }
);
```
#### 🔹 Promise를 사용한 비동기 처리 
```javascript
function isPositiveP(number) {
    const executor = (resolve, reject) => { // 비동기 작업을 실질적으로 수행하는 함수 
        setTimeout(() => {
            if (typeof number === 'number') {
                resolve(number >= 0 ? '양수' : '음수');
            } else {
                reject('주어진 값이 숫자형이 아닙니다.');
            }
        }, 2000);
    };

    const asyncTask = new Promise(executor); // executor 함수가 바로 실행됨 
    return asyncTask;
    // 어떤 함수가 Promise를 반환한다는 것은, 그 함수는 비동기 작업을 하고 그 결과를 Promise 객체로 반환받아 사용할 수 있는 함수라는 것 
}

const res = isPositiveP(101);

res // Promise 객체의 비동기 처리의 결과를 사용
  .then((res) => { // resolve를 수행했을 때 전달하는 결과값을 then 메소드의 콜백함수에서 받아올 수 있음 
    console.log('작업 성공: ', res); 
  })
  .catch((err) => { // reject를 수행했을 때 전달하는 결과값을 catch 메소드의 콜백함수에서 받아올 수 있음 
    console.log('작업 실패: ', err);
  });
```
#### 🔹 Promise를 이용한 콜백 지옥 탈출 
```javascript
function taskA(a, b) { // 콜백 함수 필요 x
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

taskA(5, 1) 
  .then((a_res) => {
    console.log('A RESULT: ', a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log('B RESULT: ', b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log('C RESULT: ', c_res);
  }); // then 체이닝 


// 콜백 지옥 

// function taskA(a, b, cb) {
//     setTimeout(() => {
//         const res = a + b;
//         cb(res);
//     }, 3000);
// }

// function taskB(a, cb) {
//     setTimeout(() => {
//         const res = a * 2;
//         cb(res);
//     }, 1000);
// }

// function taskC(a, cb) {
//     setTimeout(() => {
//         const res = a * -1;
//         cb(res);
//     }, 2000);
// }

// taskA(3, 4, (a_res) => {
//     console.log('A RESULT: ', a_res);
//     taskB(a_res, (b_res) => {
//         console.log('B RESULT: ', b_res);
//         taskC(b_res, (c_res) => {
//             console.log('C RESULT: ', c_res);
//         });
//     });
// });
```
