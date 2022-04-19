/**
 * 함수
 * 다음 코드는 JavaScript에서 아무런 문제가 없지만 tsconfig.json에 설정된 noImplicitAny 설정 값이 true일
 * 경우, 명시적으로 타입 설정을 하지 않아 컴파일 시 다음과 같은 오류를 출력하빈다.
 */

function setInfo(id, name) {
  return { id, name };
}
const product_one = setInfo(120912, '스노우보드');

// ! noImplicitAny 설정 값이 true이면, 암시적인 any 사용 시, 오류 메시지를 출력합니다.

function setInfo2(id: number, name: string) {
  return { id, name };
}

const product_one2: object = setInfo2(120912, '스노우보드');
console.log(product_one2);

/**
 * 유니온 타입
 * id 매개변수에 설정 가능한 타입 값을 number, string 모두 가능하게 하려면 파이프(|)를 사용하여 설정합니다.
 * 이를 유니온(union) 타입이라고 부릅니다.
 */

function setInfoUnion(id: number | string, name: string) {
  return { id, name };
}

/**
 * 함수 리턴 타입 (void)
 * void는 결과 값을 반환하지 않는 함수에 설정합니다. 반면 결과 값을 반환하는 함수의 경우 명시적으로 반환 값의
 * 타입을 기술할 수 있습니다.
 */

// 리턴 값 타입이 명시적으로 설정되지 않는 함수
function assignClas(name: string): void {
  document.documentElement.classList.add(name);
}

// 리턴 값 타입이 숫자인 함수
function factorial(n: number): number {
  if (n < 0) return 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// 리턴 값 타입이 문자인 경우
function repeat(text: string, count = 1): string {
  let result = '';
  while (count--) result += text;
  return result;
}

// void 0은 undefined와 같습니다. 명시적으로 반환 값을 설정하지 않는 함수는 undefined를 반환하기에
// TypeScript에서는 void를 명시합니다.

/**
 * 함수 식
 * 변수에 함수 값을 할당하는 (Expression)은 컴파일 과정에서 오류를 발생시키지는 않습니다.
 * 하지만 보다 명시적으로 함수에 설정 가능한 타입을 정의하고자 한다면 다음과 같이 작성할 수 있습니다.
 */

/**
 * let assignClass = function (name) {
 *    document.documentElement.classList.add(name);
 * }
 */

// 변수에 함수 매개변수, 리턴 타입에 대한 명시적 설정
let assignClass: (name: string) => void;

assignClass = function (name) {
  document.documentElement.classList.add(name);
};

// 변수에 명시적 타입 설정과 함수 값 할당 구문을 별도로 나누지 않고, 한번에 정의할 수도 있습니다.
let factorialExp: (num: number) => number = function (num) {
  if (num < 0) return 0;
  if (num === 1) return 1;
  return num * factorialExp(num - 1);
};

// ES6 화살표 함수 식을 사용하면 다음과 같이 기술할 수도 있습니다.
let facotialExpES6: (num: number) => number = num => {
  if (num < 0) return 0;
  if (num === 1) return 1;
  return num * facotialExpES6(num - 1);
};
