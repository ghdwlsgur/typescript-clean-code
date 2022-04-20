/**
 * 클래스와 제네릭
 *
 * 클래스 정의시, 제네릭을 사용하면 클래스를 사용해 객체를 생성할 때 사용자가 타입을 지정해 사용할 수 있습니다.
 * 사용 방법은 클래스 이름 뒤에 <T>를 붙입니다. T는 관용적인 식별자로 다른 이니셜을 사용해도 무방합니다.
 */

class Model2<T> {
  private _data: T[] = [];

  constructor(data: T[] = []) {
    this._data = data;
  }

  get data(): T[] {
    return this._data;
  }

  add(item: T): void {
    this._data.push(item);
  }

  remove(index: number): void {
    this._data.splice(index, 1);
  }

  item(index: number): T {
    return this._data[index];
  }

  clear(): void {
    this._data = [];
  }
}

const stringModel = new Model2<string>();
stringModel.add('흔들의자');
console.log(stringModel.data);
stringModel.add(2018 as any);
console.log(stringModel.data);
