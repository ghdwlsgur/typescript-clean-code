/**
 * 매개변수 이행 규칙
 *
 * 매개변수에도 인터페이스를 설정할 수 있습니다. 인터페이스가 설정된 매개변수는 인터페이스에 정의된 요구사항을
 * 충족해야 합니다. 충족하지 못할 경우, TypeScript는 컴파일 과정에서 오류를 발생시킵니다.
 */

interface OnInitInterface {
  onInit(): void;
  initialize(): void;
}

const o = {
  onInit(): void {
    console.log('onInit 라이프 사이클');
  },
  initialize(): void {
    console.log('객체 초기화');
  },
};

const j = {
  settings(): void {
    console.log('객체 설정');
  },
};

function ready(m: OnInitInterface): void {
  m.onInit();
  m.initialize();
}

ready(o);
