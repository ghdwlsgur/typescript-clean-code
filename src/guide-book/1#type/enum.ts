/**
 * TypeScript는 enum 열거형 데이터 타입을 지원합니다. 멤버라 불리는 명명된 값의 집합을 이루는 자료형으로 기억하기
 * 어려운 숫자 대신 친숙한 이름으로 접근/사용하기 위해 활용할 수 있습니다. 열거된 각 멤버는 별도의 값이 설정되지 않은
 * 경우 기본적으로 0부터 시작합니다. 아래 코드에서 sarha 변수에 할당된 값은 3입니다. 설정된 Team 열거형 데이터의
 * Designer 멤버 값이 숫자 3이기 때문입니다.
 */

enum Team {
  Manager, // 0
  Planner, // 1
  Developer, // 2
  Designer, // 3
}

const sarha: number = Team.Designer; // 3
console.log(sarha);

enum Team2 {
  Manager = 101,
  Planner = 208,
  Developer = 302,
  Designer, // 302 + 1
}
/** Compile Code => JavaScript
 * var Team2;
 *
 * (function (Team2) {
 *  Team2[Team2["Manager"] = 101] = "Manager";
 *  Team2[Team2["Planner"] = 208] = "Planner";
 *  Team2[Team2["Developer"] = 302] = "Developer";
 *  Team2[Team2["Designer"] = 303] = "Designer";
 * })(Team2 || (Team2 = {}))
 *
 *
 */

const yamoo9: number = Team2.Manager;
const kate: number = Team2.Designer;

console.log(yamoo9, kate);

const role: string = Team2[302];
console.log(role);
