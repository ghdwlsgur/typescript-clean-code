/**
 * 함수 또는 클래스에서 멀티 타입 변수를 활용할 수 있습니다. 배열 내부에 사용자가 지정한 멀티 타입을 포함하는
 * 배열을 추가하는 함수를 만든다면 TypeScript 멀티 타입 변수를 사용하여 다음과 같이 작성할 수 있습니다.
 */

type pairArray = [any, any][];

function pushPairItem<T, M>(arr: pairArray, item: [T, M]): pairArray {
  arr.push(item);
  return arr;
}

const data: pairArray = [];
pushPairItem<boolean, string>(data, [false, 'false']);
pushPairItem<number, string>(data, [2019, '이천년']);

/**
 * 팩토리 함수 + 멀티 타입
 *
 * 클래스와 옵션을 멀티 타입으로 설정하여 처리하는 팩토리 함수가 있다고 가정합니다.
 * 눈여겨 볼 부분은 클래스를 전달 받을 때 타입을 어떻게 설정해야 하는가 입니다.
 */

class Model3 {
  constructor(public options: any) {}
}

function create<T, U>(C: new (U) => T, options: U): T {
  return new C(options);
}
