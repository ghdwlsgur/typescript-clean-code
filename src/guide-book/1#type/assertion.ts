/**
 * TypeScript 프로그래밍을 하다 보면 타입 어설션(Assertion)을 사용해야 할 순간이 오게 됩니다.
 * 타입 어설션은 컴파일러에게 "이 타입이 특정 타입임을 단언합니다."라고 말하는 것과 같습니다.
 *
 * 다른 언어의 타입 캐스트(Cast)와 비슷하지만, 특별한 검사나 데이터 재구성을 수행하지 않습니다.
 * 런타임 시, 영향을 미치지 않으며 오직 컴파일 과정에서만 사용됩니다. 타입 어설션을 처리하는 방법은 2가지 입니다.
 */

// 1. 앵글 브라켓(angle-bracket, <>) 문법 사용
let assertionAB: any = "타입 어설션은 '타입을 단언'합니다.";
let assertion_count_AB: number = (<string>assertionAB).length;

// 2. as 문법 사용
let assertionAS;
let assertion_count_AS: number = (assertionAS as string).length;

let word: any = '안녕하세요';
let word_count: number = (word as string).length;
