/**
 * ES6부터 클래스 문법을 사용할 수 있습니다. 클래스를 정의하고, 속성을 설정하는 기본 사용법은 다음과 같습니다.
 */

class Book {
  private _pages: any;
  private _title: any;
  private _author: any;

  constructor(title: string, author: string, pages: number) {
    this._title = title;
    this._author = author;
    this._pages = pages;
  }

  public get title(): string {
    return this._title;
  }

  public get author(): string {
    return this._author;
  }

  public get pages(): number {
    return this._pages;
  }

  // 클래스 메서드
  static create() {}

  // 인스턴스 메서드
  init() {}
}

let indRevo = new Book('한 권으로 정리하는 4차 산업혁명', '최진기', 367);
console.log(indRevo);

console.log(indRevo.title);
console.log(indRevo.author);
console.log(indRevo.pages);
