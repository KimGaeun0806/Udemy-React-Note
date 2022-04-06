// props로 동적인 데이터도 전달 가능 (state같은)
// 컴포넌트는 부모가 내려주는 props가 변경되면 리렌더링함
// props를 받지 않아도, 부모의 state가 변경되어 리렌더링되면 자식도 리렌더링함

const OddEvenResult = ({ count }) => {
  return <> {count % 2 === 0 ? '짝수' : '홀수'} </>;
};

export default OddEvenResult;
