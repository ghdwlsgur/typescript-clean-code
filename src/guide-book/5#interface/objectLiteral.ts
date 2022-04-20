/**
 * 객체 리터럴 이행 규칙
 *
 * 클래스 선언 과정에서 implements 키워드를 이용해 명시적으로 인터페이스를 설정하는 방법이 아니어도, 객체 리터럴
 * 에 인터페이스를 설정할 수 있습니다. 인터페이스가 설정된 객체는 요구 조건을 충족하지 못할 경우 오류를 출력합니다.
 */

interface OnInitInterface {
  onInit(): void;
  initialize(): void;
}

const object: OnInitInterface = {
  onInit(): void {
    console.log('onInit 라이프 사이클');
  },
  initialize(): void {
    console.log('객체 초기화');
  },
};

// const badthings: OnInitInterface = {
//   settings(): void {
//     console.log('객체 설정');
//   },
// };
