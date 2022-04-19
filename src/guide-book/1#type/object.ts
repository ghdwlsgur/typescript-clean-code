/**
 * TypeScript에서는 변수에 초기 설정된 값을 암시적으로 할당 가능한 데이터 타입으로 설정하기에 초기 설정된 값과 다른
 * 형태로 할당될 경우 다음과 같은 오류를 출력합니다.
 */

// let Dom = {
//   version: '0.0.1',
//   el() {},
//   css() {},
// };

// Dom = {
//   append() {},
// };

// 객체의 각 속성별 타입을 명시하려면 다음과 같이 코드를 작성할 수 있습니다.
let Dom: { version: string; el: () => void; css: () => void };

Dom = {
  version: '0.0.1',
  el() {},
  css() {},
};

const Dom2: { version: string; el: () => void; css: () => void } = {
  version: '0.0.2',
  el() {},
  css() {},
};

// 하지만 타입으로 설정되지 않은 객체의 속성을 새롭게 추가할 경우 오류 메시지를 출력합니다.
// 매번 새로운 속성을 추가할 때마다 타입을 지정하는 것은 매우 번거롭습니다. 새 속성을 추가해도
// 오류 메시지를 출력하지 않게 구성하려면 [propName: string]: any를 사용할 수 있습니다.
// ! [propName: propType]: returnType

const Dom3: {
  version: string;
  el: () => void;
  css: () => void;
  [propName: string]: any;
} = {
  version: '0.0.1',
  el: () => {},
  css: () => {},
};

Dom3.each = function () {};
Dom3.map = function () {};
Dom3.filter = function () {};

console.log(Dom3);
