// 컴포넌트를 다른 컴포넌트의 props로 전달할 때
// 이 컴포넌트는 App.js의 요소들을 모두 border 안에 집어넣을 때 사용

const Container = ({ children }) => {
  return (
    <div style={{ magin: 20, padding: 20, border: '1px solid gray' }}>
      {children}
    </div>
  );
};

export default Container;
