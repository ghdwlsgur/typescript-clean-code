/**
 * 원시 데이터 타입 number, string, boolean을 명시적으로 설정한 변수 선언은 다음과 같이 작성합니다.
 */
// 명시적으로 number 타입을 설정
const product_id: number = 124981;

// 명시적으로 string 타입을 설정
const product_name: string = 'VR 글래스';

// 명시적으로 boolean 타입을 설정
const is_waterprofing: boolean = false;

/**
 * 설정된 데이터 타입이 아닌 데이터 타입을 할당하려 할 경우 TypeScript는 컴파일 과정에서
 * 오류메시지를 출력해 사용자에게 알립니다.
 */
console.log(`product_id : ${product_id}`);
console.log(`product_name : ${product_name}`);
console.log(`is_waterprofing: ${is_waterprofing}`);
