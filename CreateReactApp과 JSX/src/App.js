// import './App.css'; // css를 사용한 스타일링
import React from 'react';
import MyHeader from './MyHeader';

function App() {
  let name = '김가은';
  const num = 5;

  // 인라인 스타일링 (css 파일 사용 x)
  const style = {
    App: {
      backgroundColor: 'black',
    },
    h2: {
      color: 'aquamarine',
    },
    bold_text: {
      color: 'blanchedalmond',
    },
  };

  return (
    // className="App"과 id="bold_text"는 css를 이용한 스타일링, style={style.}은 인라인 스타일링에 사용
    <div className="App" style={style.App}>
      <MyHeader />
      {/* 중괄호({}) 안에서 js 표현식 사용 가능. 숫자, 문자열, 식 등의 값만 가능 */}
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b id="bold_text" style={style.bold_text}>
        {num}는 : {num % 2 === 0 ? '짝수' : '홀수'}{' '}
        {/* 조건에 따라 다르게 렌더링하는 조건부 렌더링 */}
      </b>
    </div>
  );
}

// JSX 문법
// 1. 닫힘 규칙 -> 모든 태그를 닫아야 함 (<header></header> 혹은 <header/>과 같은 식으로)
// 2. 최상위 태그 규칙 -> 가장 바깥의 태그인 최상위 태그가 무조건 존재해야 함 (하나의 최상위 태그로 다른 태그들을 전부 묶어줘야 함)
//                    -> <React.Fragment></React.Fragment> 혹은 <></>로 감싸기

export default App;
// App 함수 내보내기
// 다른 파일에서 import 이름 from 경로; 로 사용 가능 (이름은 변경 가능)
// 한 개만 내보낼 수 있음
