## ☁️ API 호출하기 
<img src="/sources/api레스토랑.png" width="800px">
</br>
<img src="/sources/api.png" width="800px">
</br>
<img src="/sources/api호출.png" width="800px">

#### 🔹 api 호출은 데이터를 받기 위해 말을 거는 것과 비슷. 웨이터에게 주문하는 것과 비슷한 행위. 
```javascript
let response = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
    console.log(res);
}) 
// 주소는 api 호출할 때 누구한테 요청할지 결정하는 주소 
// fetch는 api 호출을 할 수 있도록 도와주는 내장함수
// fetch는 promise를 반환하는 함수인 비동기함수이고, 이 함수의 처리 결과는 then을 통해서 사용할 수 있음 
// fetch가 주소를 통해서 api를 호출하고, 성공했다면 resolve가 호출되며 res를 담아서 전달. 그리고 콜백함수가 수행됨. 
// 이 때는 Response 객체가 출력됨. 결과값의 포장지. 

async function getData() {
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}
getData(); // 포장을 뜯은 상태의 데이터가 출력됨
```