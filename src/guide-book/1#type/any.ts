/**
 * 동적 형 지정 언어인 JavaScript는 선언된 변수에 어떤 값이든 재 할당이 가능합니다.
 * 반면 TypeScript는 명시적으로 데이터 유형을 설정해 사용하는 정적 형 지정 언어로
 * 타입을 지정해 사용하는 것이 권장됩니다.
 *
 * 하지만 애플리케이션 개발 시 어떤 타입을 할당해야 할지 알지 못하는 경우 (외부 라이브러리나 동적 컨텐츠를 사용할 경우)가
 * 있을 수 있습니다. 이런 경우 어떤 타입도 할당 가능하도록 any를 설정할 수 있습니다. JavaScript는 기본적으로 변수에
 * any가 할당된 것과 같습니다. (자동으로 형 변환이 이루어집니다.)
 */

// 명시적으로 any 타입 지정
let product_id_any: any = 124981;
console.log(`before : ${typeof product_id_any}`);

// any 유형이 설정되었으므로 어떤 유형도 값으로 할당 가능
product_id_any = 'p999912';
console.log(`after: ${typeof product_id_any}`);
