/**
 * 비구조화 할당은 배열, 객체의 아이템 또는 속성을 변수에 할당할 때 유용합니다.
 */

// 배열 비구조화 할당
let [html, , body] = [document.documentElement, document.head, document.body];

// 객체 비구조화 할당
let numbers_module = {
  multiplyNumbers: (...n: number[]): number => n.reduce((a, b) => a * b),
  sumNumbers: (...n: number[]): number => n.reduce((a, b) => a + b),
};

let { sumNumbers } = numbers_module;
