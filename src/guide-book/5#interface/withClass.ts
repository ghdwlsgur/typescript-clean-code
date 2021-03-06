/**
 * 클래스 이행 규칙
 *
 * 인터페이스는 클래스와 비슷한데, 클래스와 달리 정의만 할 뿐 실제 구현되지 않습니다.
 * 즉, 어떠한 객체를 생성했을 때 가져야 할 속성 또는 메서드를 정의한다고 보면 됩니다. (추상 클래스와 유사해보입니다.)
 *
 * 클래스 Y9Button에 implements 키워드를 사용해 정의된 ButtonInterface 인터페이스를 설정할 수 있습니다.
 * 이는 클래스가 인터페이스에 정의된 실행 규칙을 따라야 함을 선언한 것입니다. 인터페이스가 설정된 클래스에서
 * 인터페이스가 요구하는 것을 구현하지 않을 경우, TypeScript는 컴파일 과정에서 오류를 발생시킵니다.
 */

class Y9Button implements ButtonInterface {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  onClick(): void {}
  onInit(): void {}
  onToggle(): void {}
}
