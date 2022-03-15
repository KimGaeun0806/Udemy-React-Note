## ☁️ spread 연산자 
#### 🔹 객체의 값들을 펼칠 수 있음
#### 🔹 객체에서 중복된 프로퍼티들을 처리할 때 
```javascript
const cookie = {
    base: 'cookie',
    madeIn: 'Korea'
};

const chocoChipCookie = {
    ...cookie, // base: 'cookie', madeIn: 'Korea' 대신 사용 
    topping: 'chocochip'
};

const appleCookie = {
    ...cookie,
    topping: 'apple'
};

console.log(chocoChipCookie); // {base: "cookie", madeIn: "Korea", topping: "chocochip"}
```
#### 🔹 배열의 값들을 펼칠 수 있음 
#### 🔹 두 배열을 합칠 때 
```javascript
const noToppingCookies = ['촉촉한쿠키', '안촉촉한쿠키'];
const toppingCookies = ['불닭쿠키', '초코칩쿠키', '녹차쿠키', '두유쿠키'];

const allCookies = [...noToppingCookies, ...toppingCookies];
console.log(allCookies); // ['촉촉한쿠키', '안촉촉한쿠키', '불닭쿠키', '초코칩쿠키', '녹차쿠키', '두유쿠키']

const moreCookies = [...noToppingCookies, '핵불닭쿠키', ...toppingCookies];
console.log(moreCookies); // ['촉촉한쿠키', '안촉촉한쿠키','핵불닭쿠키', '불닭쿠키', '초코칩쿠키', '녹차쿠키', '두유쿠키']
// concat()과 달리 중간에 값을 유연하게 추가할 수 있음 
```