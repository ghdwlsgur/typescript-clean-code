/**
 * 명시적 타입 지정 없이 코드를 아래와 같이 작성하면 TypeScript는 컴파일 과정에서 다음과 같은 오류를 출력합니다.
 */

// let members = ['이권', '감장겸', '장도일'];

// ! Type 'number' is not assignable to type 'string'.
// members = [9, 13, 26];

// 오류가 발생한 이유는 암시적으로 members 변수에 설정된 데이터 타입이 string[]이기 때문입니다.
// string 타입만으로 아이템이 채워진 초기 배열과 달리, members = [9, 13, 26] 구문은 number 타입으로만
// 데이터를 채워 문제가 된다고 경고합니다.

// let members: string[] = ['홍', '진', '혁'];

// 만약 복합적으로 어떤 데이터 타입도 아이템으로 설정할 수 있는 배열이 필요하다면 다음과 같이 명시적 타입 선언을
// 수행할 수 있습니다. any는 어떤 데이터 타입도 배열 아이템으로 설정 가능함을 말합니다.

let members: any[] = [{ lastname: '홍' }, '진', '혁'];
console.log(members);

members.push(1);
console.log(members);

// any[]는 배열 타입을 명시적으로 선언한 것이므로 배열이 아닌 다른 데이터는 할당될 수 없습니다.

// 오직 숫자 자료형만 배열의 요소만 허용
let numberAry: number[] = [100, 101, 102];
// 오직 문자 자료형만 배열의 요소만 허용
let stringAry: string[] = ['ㄱ', 'ㄴ', 'ㄷ'];
// 오직 불리언 자료형만 배열의 요소만 허용
let booleanAry: Array<boolean> = [true, false, true];
// 모든 데이터 타입을 배열의 요소로 허용
let anyAry: Array<any> = [100, 'ㄱ'];
// 특정 데이터 타입만 배열의 요소로 허용
let selects: (number | string)[] = [102, 'ㄱ'];

console.log(numberAry);
console.log(stringAry);
console.log(booleanAry);
console.log(anyAry);
console.log(selects);
