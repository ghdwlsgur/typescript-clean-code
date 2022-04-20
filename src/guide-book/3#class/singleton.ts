/**
 * 싱글턴 패턴
 * private 접근 제어자를 사용해 constructor()앞에 붙이면 new 키워드를 통해 인스턴스를 생성하지 못하도록
 * 제한할 수 있습니다. 대신 공개된 스태틱 메서드 getInstance()를 통해 오직 한 번만 인스턴스를 생성할 수 있습니다.
 * 이를 싱글턴 패턴이라고 부릅니다.
 */

class OnlyOne {
  private static instance: OnlyOne;

  public name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(name: string): OnlyOne {
    if (!OnlyOne.instance) OnlyOne.instance = new OnlyOne(name);
    return OnlyOne.instance;
  }
}

// let bad_case = new OnlyOne('오류 발생')
let good_case = OnlyOne.getInstance('good');
console.log(good_case.name);
