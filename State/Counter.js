import React, { useState } from 'react';
// state는 react의 기능이기 때문에 react를 import해야 함

const Counter = () => {
  const [count, setCount] = useState(0);
  // count는 상태 값
  // setCount는 count라는 상태를 변화시키는 상태변화함수
  // useState의 인수인 0은 count의 초기값
  // 컴포넌트는 자신이 가진 state가 변화하면 화면을 다시 그려 리렌더링함 (함수가 다시 호출됨)

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const [count2, setCount2] = useState(0);
  // 컴포넌트는 state를 여러 개 가질 수 있음

  const onIncrease2 = () => {
    setCount2(count2 + 1);
  };

  const onDecrease2 = () => {
    setCount2(count2 - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  );
};

export default Counter;
