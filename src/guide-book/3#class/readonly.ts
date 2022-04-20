/**
 * 읽기 전용
 * readonly 키워드를 사용해 클래스 속성 이름 앞에 추가하면 읽기 전용 속성이 되어 속성을 다른 값으로 쓸 수 없습니다.
 * 다른 값을 설정하려고 시도하면 컴파일 과정에서 다음과 같은 오류 메시지를 출력합니다.
 */

class Singleton {
  private static instance: Singleton;

  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(name: string): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton(name);
    return Singleton.instance;
  }
}

let special_one = Singleton.getInstance('바보');
console.log(special_one.name);

// special_one.name = '천재';
