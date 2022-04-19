/**
 * JavaScript에서 null, undefined는 데이터 타입이자 하나의 값입니다.
 * TypeScript에서도 하나의 타입으로 처리되며 다음과 같이 사용할 수 있습니다.
 */

let nullable: null = null;
let undefinedable: undefined = undefined;

// 하지만 null로 명시적 타입이 설정된 변수에 null이 아닌 값이 할당되면
// 오류를 발생시킵니다.

// 이와 같이 엄격하게 오류를 출력하는 이유는 tsconfig.json에 "strictNullChecks": true
// 가 설정되어 있기 때문입니다. 설정 값을 false로 설정할 경우 위와 같은 오류가 발생하지 않습니다.

// 참고로 "strictNullChecks": true 설정 시, 모든 데이터 타입은 null, undefined를 할당 받을 수 없습니다.

// 이 문제를 해결하려면 애니(any) 또는 유니온(|)타입을 사용해야 합니다.
// 하지만 any를 사용하면 문자 타입으로 특정 짓는 것이 아니므로 유니온 타입을 사용하는 것이 보다 적절합니다.

let assign_name: string | null = null;
if (!assign_name) assign_name = '미네랄';

console.log(assign_name);

let nullCheck_false: null = null;

console.log(nullCheck_false);
