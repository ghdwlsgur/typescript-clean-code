/**
 * 클래스를 통해 인스턴스를 생성할 필요 없이, 클래스의 속성 또는 메서드를 사용하고자 한다면
 * static 키워드를 사용해 속성, 메서드를 정의합니다.
 */

class Mathmatics {
  // static 속성
  static _PI: number = Math.PI;

  // 원주율
  // static 메서드
  static calcCircumference(radius: number): number {
    return this._PI * radius * 2;
  }

  // static 메서드
  static calcCircleWidth(radius: number): number {
    return this._PI * Math.pow(radius, 2);
  }
}

let radius = 4;
console.log(Mathmatics._PI);
console.log(
  `반지름이 ${radius}인 원의 넓이: ${Mathmatics.calcCircleWidth(radius)}`,
);

console.log(
  `반지름이 ${radius}인 원의 둘레: ${Mathmatics.calcCircumference(radius)}`,
);
