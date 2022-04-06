import React from 'react';
import Container from './Container';
import Counter from './Counter';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  };

  return (
    <Container>
      {/* Container 컴포넌트 사이의(자식) 요소들은 Container의 childeren이라는 props로 전달됨  */}
      <div>
        <Counter {...counterProps} />
        {/* App 컴포넌트에서 Counter 컴포넌트로 객체로 props 전달 */}
        {/* <Counter a={1} b={2} c={3} d={4} e={5} initialValue={5} /> 도 가능. 이렇게 해도 객체로 전달됨. */}
      </div>
    </Container>
  );
}

export default App;
