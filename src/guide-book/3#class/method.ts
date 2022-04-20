class Book4 {
  // 클래스 외부 접근 가능
  public _title: string;
  public _author: string;
  public _pages: number = 150;
  // 클래스 내부 접근 가능
  private _manufacturing_plant: string = '충무로 공장';
  // 클래스 포함 서브 클래스 접근 가능
  protected _paper_type: string = '밍크지';

  constructor(title: string, author: string, pages: number = 150) {
    this._title = title;
    this._author = author;
    this._pages = pages;
  }

  public printPages(): string {
    return `${this._pages}페이지`;
  }

  protected changePaperType(type: string): void {
    this._paper_type = type;
  }

  private setManufacturingPlant(plant: string): void {
    this._manufacturing_plant = plant;
  }

  public setPaperType(type: string): void {
    this.changePaperType(type);
    console.log(this._paper_type);
  }

  public setPlant(plant: string): void {
    this.setManufacturingPlant(plant);
    console.log(this._manufacturing_plant);
  }
}

let indRevo4 = new Book4('한 권으로 정리하는 4차 산업혁명', '최진기', 367);
console.log(indRevo4.printPages());
indRevo4.setPaperType('그냥종이');
indRevo4.setPlant('강남 공장');
