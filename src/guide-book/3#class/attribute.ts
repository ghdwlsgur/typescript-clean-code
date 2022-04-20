/**
 * TypeScript의 클래스 문법은 ES6의 기능을 포함하면서 보다 강력한 기능을 제공합니다.
 * 접근 제어자 (access modifiers)를 통해 접근 가능한 범위를 설정할 수 있고, 각 속성에 데이터 타입을 지정할 수 있습니다.
 */

class Book2 {
  // public: 클래스 외부에서 접근 가능
  public _title: string;

  // public은 기본값으로 생략 가능
  _author: string;
  _pages: number;

  // private: Book 클래스 내부에서만 접근 가능
  private _manufacturing_plant: string;

  // protected: Book 클래스를 포함한 서브 클래스에서만 접근 가능
  protected _paper_type: string = '종이';

  // constructor() 매개변수 앞에
  // public, private, protected를 사용하면
  // Book 클래스의 타입(type)을 별도 선언하지 않아도 된다.
  constructor(title: string, author: string, pages: number) {
    this._title = title;
    this._author = author;
    this._pages = pages;
  }
}

class Book3 extends Book2 {
  constructor(title: string, author: string, pages: number) {
    super(title, author, pages);
  }

  public get paper_type(): string {
    return this._paper_type;
  }
}

let indRevo2 = new Book2('한 권으로 정리하는 4차 산업 혁명', '최진기', 367);

// console.log(indRevo2.paper_type);
let subClass = new Book3('한 권으로 정리하지 못하는 혁명', '홍진혁', 123);
console.log(subClass.paper_type);
