import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';

const Counter = (props) => {
  const [count, setCount] = useState(props.initialValue); // props는 객체이기 때문에 점 표기법으로 접근 가능

  // const Counter = ({ initialValue }) => {
  //  const [count, setCount] = useState(initialValue);
  // 와 같이 비구조화 할당을 통해 받을 수도 있음. props 객체에서 initialValue라는 값만 꺼내 쓴 것.

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <OddEvenResult count={count} />
      {/* Counter에서 OddEvenResult로 count라는 props 전달 */}
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
  // App 컴포넌트에서 initialValue를 props로 전달하지 않은 상황이더라도 이렇게 하면 initialValue 사용 가능
  // defaultProps 기능을 이용해서 전달받지 못한 props의 기본값을 설정해서 에러 방지 가능
};

export default Counter;
