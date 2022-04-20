/**
 * 확장
 *
 * 클래스를 상속하는 클래스가 있듯이, 인터페이스 또한 extends 키워드를 사용해 인터페이스를 확장할 수 있습니다.
 */

interface B2Interface {
  readonly _type: string;
  width?: number;
  height?: number;
  onInit?(): void;
  onClick(): void;
}

interface ToggleButtonInterface extends B2Interface {
  toggle(): void;
  onToggled?(): void;
}

interface CounterButtonInterface extends B2Interface {
  increase(): void;
  decrease(): void;
  onincreased?(): void;
  onDecreased?(): void;
}
