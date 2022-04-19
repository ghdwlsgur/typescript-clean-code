/**
 * tuple은 JavaScript에서는 지원하지 않는 데이터 타입이지만, TypeScript에서는 배열 타입을 보다 특수한 형태로
 * 사용할 수 있는 tuple 타입을 지원합니다. tuple에 명시적으로 지정된 형식에 따라 아이템 순서를 설정해야 되고, 추가
 * 적인 아이템 또한 tuple에 명시된 타입만 사용 가능합니다.
 */

let book__name_price: [string, number] = ['카밍 시그널', 2];

book__name_price = ['test', 2];

// book__name_price = [13320, '카밍시그널'];
// bkk_name_price.push(false);

console.log(book__name_price);
