## โ๏ธ Promise  
#### ๐น ์ฐ์๋๋ ๋น๋๊ธฐ ํจ์๋ค์ ์ฒ๋ฆฌํ  ๋ ๋น๋๊ธฐ ์ฒ๋ฆฌ์ ๊ฒฐ๊ณผ๊ฐ์ ์ฌ์ฉํ๊ธฐ ์ํด์ ์ฝ๋ฐฑ์ด ๊ณ์ ๊น์ด์ง๋ ์ฝ๋ฐฑ ์ง์ฅ์ ํด๊ฒฐํ  ์ ์๋ ๊ฐ์ฒด 
#### ๐น JS์ ๋น๋๊ธฐ๋ฅผ ๋๋ ๊ฐ์ฒด. ๋น๋๊ธฐ ์ฒ๋ฆฌ์ ๊ฒฐ๊ณผ๊ฐ์ ํธ๋ค๋งํ๋ ์ฝ๋๋ฅผ ๋น๋๊ธฐ ํจ์๋ก๋ถํฐ ๋ถ๋ฆฌํ  ์ ์์. 
#### ๐น ๋น๋๊ธฐ ์ฒ๋ฆฌ์ ๊ฐ๋์ฑ ํฅ์์ ๋์ 
#### ๐น ๋น๋๊ธฐ ์์์ด ๊ฐ์ง ์ ์๋ 3๊ฐ์ง ์ํ
- Pending (๋๊ธฐ ์ํ)
- Fulfilled (์ฑ๊ณต) -> Pending์์ Fulfilled์ด ๋๋ ๊ณผ์ ์ resolve (ํด๊ฒฐ)์ด๋ผ๊ณ  ํจ 
- Rejected (์คํจ) -> Pending์์ Rejected์ด ๋๋ ๊ณผ์ ์ reject (๊ฑฐ๋ถ) ๋ผ๊ณ  ํจ 
#### ๐น ์ฝ๋ฐฑํจ์๋ฅผ ์ด์ฉํ ๋น๋๊ธฐ ์ฒ๋ฆฌ 
```javascript
function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') { // ์ฑ๊ณต -> resolve 
            resolve(number >= 0 ? '์์' : '์์');
        } else { // ์คํจ -> reject 
            reject('์ฃผ์ด์ง ๊ฐ์ด ์ซ์ํ์ด ์๋๋๋ค.');
        }
    }, 2000);
}

isPositive(
    10,
    (res) => {
        console.log('์ฑ๊ณต์ ์ผ๋ก ์ํ๋จ: ', res);
    },
    (err) => {
        console.log('์คํจํจ: ', err);
    }
);
```
#### ๐น Promise๋ฅผ ์ฌ์ฉํ ๋น๋๊ธฐ ์ฒ๋ฆฌ 
```javascript
function isPositiveP(number) {
    const executor = (resolve, reject) => { // ๋น๋๊ธฐ ์์์ ์ค์ง์ ์ผ๋ก ์ํํ๋ ํจ์ 
        setTimeout(() => {
            if (typeof number === 'number') {
                resolve(number >= 0 ? '์์' : '์์');
            } else {
                reject('์ฃผ์ด์ง ๊ฐ์ด ์ซ์ํ์ด ์๋๋๋ค.');
            }
        }, 2000);
    };

    const asyncTask = new Promise(executor); // executor ํจ์๊ฐ ๋ฐ๋ก ์คํ๋จ 
    return asyncTask;
    // ์ด๋ค ํจ์๊ฐ Promise๋ฅผ ๋ฐํํ๋ค๋ ๊ฒ์, ๊ทธ ํจ์๋ ๋น๋๊ธฐ ์์์ ํ๊ณ  ๊ทธ ๊ฒฐ๊ณผ๋ฅผ Promise ๊ฐ์ฒด๋ก ๋ฐํ๋ฐ์ ์ฌ์ฉํ  ์ ์๋ ํจ์๋ผ๋ ๊ฒ 
}

const res = isPositiveP(101);

res // Promise ๊ฐ์ฒด์ ๋น๋๊ธฐ ์ฒ๋ฆฌ์ ๊ฒฐ๊ณผ๋ฅผ ์ฌ์ฉ
  .then((res) => { // resolve๋ฅผ ์ํํ์ ๋ ์ ๋ฌํ๋ ๊ฒฐ๊ณผ๊ฐ์ then ๋ฉ์๋์ ์ฝ๋ฐฑํจ์์์ ๋ฐ์์ฌ ์ ์์ 
    console.log('์์ ์ฑ๊ณต: ', res); 
  })
  .catch((err) => { // reject๋ฅผ ์ํํ์ ๋ ์ ๋ฌํ๋ ๊ฒฐ๊ณผ๊ฐ์ catch ๋ฉ์๋์ ์ฝ๋ฐฑํจ์์์ ๋ฐ์์ฌ ์ ์์ 
    console.log('์์ ์คํจ: ', err);
  });
```
#### ๐น Promise๋ฅผ ์ด์ฉํ ์ฝ๋ฐฑ ์ง์ฅ ํ์ถ 
```javascript
function taskA(a, b) { // ์ฝ๋ฐฑ ํจ์ ํ์ x
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
  }); // then ์ฒด์ด๋ 


// ์ฝ๋ฐฑ ์ง์ฅ 

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
