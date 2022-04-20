/**
 * 비공개로 설정할 필요가 있는 속성을 private로 설정한 후, 이 속성에 접근하여 값을 읽거나, 쓰기 위한 Getter,
 * Setter 함수를 사용하여 속성을 정의할 수 있습니다.
 */

class Plant {
  private _species: string | null = null;

  public get species(): string {
    return this._species;
  }

  // setter 함수는 리턴 타입을 명시하지 않습니다.
  public set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = '줄기';
console.log(plant.species);
plant.species = '푸른 식물';
console.log(plant.species);
