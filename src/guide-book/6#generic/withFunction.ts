// function getItemArray(arr, index) {
//   return arr[index];
// }

// function pushItemArray(arr, item) {
//   arr.push(item);
// }

// 위 JavaScript 함수를 TypeScript 함수로 변경하면 다음과 같이 구현할 수 있습니다.

// function getItemArray(arr: any[], index: number): any {
//   return arr[index];
// }

// function pushItemArray(arr: any[], item: any): void {
//   arr.push(item);
// }

// 위 함수를 다시 제네릭을 사용하여 외부에서 특정 타입을 지정할 수 있도록 구현하면
// 사용자가 함수 호출 시 지정한 타입으로 한정할 수 있어 보다 사용하기 용이해집니다.

function getItemArray<T>(arr: T[], index: number): T {
  return arr[index];
}

function pushItemArray<T>(arr: T[], item: T): void {
  arr.push(item);
}

const potatoChip_materials = ['어니언'];
console.log(getItemArray<string>(potatoChip_materials, 0));
pushItemArray<string>(potatoChip_materials, '샤워크림');
console.log(getItemArray<string>(potatoChip_materials, 1));
