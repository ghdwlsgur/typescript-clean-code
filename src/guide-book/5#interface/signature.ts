/**
 * 시그니처
 *
 * 인터페이스는 클래스에 설정되었을 때 주어진 요구사항을 준수한다면
 * 클래스에 인터페이스에 정의되지 않은 새로운 속성이 추가되어도 오류를 발생시키지 않습니다.
 */

interface BInterface {
  onInit?(): void;
  onClick(): void;
  [prop: string]: any;
}

class ButtonClass implements BInterface {
  type: string = 'button';
  disabled: boolean = false;

  constructor() {}
  onClick(): void {
    console.log('버튼 클릭');
  }

  newMethod(): void {
    console.log('메소드 추가');
  }
}

/**
 * 하지만 인터페이스를 타입으로 하는 객체 리터럴의 경우는 다릅니다.
 * 새로운 속성을 추가할 수 없다고 오류를 출력합니다.
 */

const button: BInterface = {
  type: 'button',
  disabled: false,
  onClick() {
    console.log('버튼 클릭');
  },
};

/**
 * 오류가 발생하는 이유는 인터페이스에 정의되지 않은 동적 타입이 할당되는 것을 TypeScript는 기본적으로 오류로 보기
 * 때문입니다. 그래서 오류 메시지를 살펴보면 알려진 속성만 지정할 수 있다고 안내하는 것입니다.
 * 따라서 인터페이스에 인덱스 시그니처(Index Signature) 속성을 선언하는 것입니다. 이 방법은 객체의 추가 속성을
 * 명시적으로 any 타입으로 설정한 것으로 오류를 출력하지 않습니다.
 *
 * [prop: string]: any
 */
