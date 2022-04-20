/**
 * TypeScript는 ES6에서와 마찬가지로 클래스 상속에 extends 키워드를 사용합니다.
 * 슈퍼 클래스에서 protected 접근자로 선언된 변수에 대해서 슈퍼 클래스를 상속 받은 서브 클래스가 해당 변수에
 * 값을 재할당해서 오버라이딩 할 수 있습니다. 하지만 private 접근 제어자로 선언된 변수에 대해서는 서브 클래스에
 * 접근 불가능하므로 오버라이딩 할 수 없습니다.
 */

/**
 * 일반적으로 슈퍼 클래스를 상속받은 서브 클래스는 슈퍼 클래스의 기능에 더하여 좀 더 많은 기능을 갖도록 설계합니다.
 * constructor()를 사용해 상속 받은 슈퍼 클래스의 생성자를 서브 클래스의 생성자로 덮어쓸 수 있습니다.
 * 이 때 반드시 super()를 사용해 슈퍼 클래스의 생성자에 요구되는 인자를 전달해야 합니다.
 */

class E_book extends Book {
  private _is_downloadable: boolean;

  constructor(
    title: string,
    author: string,
    pages: number,
    is_downloadable: boolean,
  ) {
    super(title, author, pages);
    this._is_downloadable = is_downloadable;
  }
}
