// 기능별로 파일을 분리하고 각각의 기능을 다른 파일에서 구현한 뒤에 불러와서 사용하기

// 계산 모듈을 만드는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = {
  moduleName: 'calc module',
  add: add,
  sub: sub,
  // 객체 단위로 모듈 내보내기. 모듈의 이름을 지칭하는 ModuleName과 add함수와 sub함수를 담은 계산 모듈 객체 내보내기
};
