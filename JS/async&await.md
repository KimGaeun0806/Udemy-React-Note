## โ๏ธ async / await
#### ๐น async
- promise์ฒ๋ผ ๋น๋๊ธฐ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ๋ฅ, promise๋ฅผ ๋ ์ฝ๊ฒ ์ด์ฉํ  ์ ์๋๋ก ๋์์ค 
```javascript
function hello() {
    return "hello";
}

async function helloAsync() {
    return "hello Async"; // promise ๋ฆฌํด 
}
// ํจ์์ async ํค์๋๋ฅผ ๋ถ์ด๋ฉด ํจ์๋ promise๋ฅผ ๋ฆฌํดํ๋ ๋น๋๊ธฐ ์ฒ๋ฆฌ ํจ์๊ฐ ๋จ 

helloAsync().then((res) => {
    console.log(res);
});
// async ํค์๋๋ฅผ ๋ถ์ธ ํจ์์ ๋ฆฌํด๊ฐ์ ๋น๋๊ธฐ ์์ ๊ฐ์ฒด promise์ resolve์ ๊ฒฐ๊ณผ๊ฐ์ด ๋จ. ๊ทธ๋์ "hello Async" ๊ฐ์ด res์ ๋ค์ด์จ ๊ฒ.
```

#### ๐น await
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
// await ํค์๋๋ฅผ ๋น๋๊ธฐ ํจ์์ ํธ์ถ ์์ ๋ถ์ด๋ฉด ๋น๋๊ธฐํจ์๊ฐ ๋๊ธฐํจ์์ฒ๋ผ ์๋ํ๊ฒ ๋จ
// await ํค์๋๊ฐ ๋ถ์ ํจ์์ ํธ์ถ์ ํจ์๊ฐ ๋๋๊ธฐ ์ ๊น์ง ์๋์ ์ฝ๋๋ฅผ ์ํํ์ง ์๋๋ค๋ ๋ป
// await ํค์๋๋ async ํค์๋๊ฐ ๋ถ์ ํจ์ ๋ด์์๋ง ์ฌ์ฉ ๊ฐ๋ฅ 

// async function helloAsync() {
//     return delay(3000).then(() => {
//         return "hello Async";
//     });
// } ๋ฅผ await์ ์ด์ฉํด ๋ณ๊ฒฝํ ์ฝ๋ 

async function main() {
    const res = await helloAsync();
    console.log(res);
}
main(); // "hello Async"๊ฐ 3์ด ๋ค ์ถ๋ ฅ๋จ

// helloAsync().then((res) => {
//     console.log(res);
// }); ๋ฅผ await์ ์ด์ฉํด ๋ณ๊ฒฝํ ์ฝ๋ 
```
