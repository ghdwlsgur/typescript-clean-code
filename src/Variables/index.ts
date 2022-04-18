class User {}

// Todo 1: Use meaningful variable names
// Bad
function between1<T>(a1: T, a2: T, a3: T): boolean {
  return a2 <= a1 && a1 <= a3;
}
// Good
function between2<T>(value: T, left: T, right: T): boolean {
  return left <= value && value <= right;
}

// Todo 2: Use pronounceable variable names
// Bad
type DtaRcrd102 = {
  genymdhms: Date;
  modymdhms: Date;
  pszqint: number;
};

// Good
type Customer = {
  generationTimestamp: Date;
  modificationTimestamp: Date;
  recordId: number;
};

// Todo 3: Use the same vocabulary for the same type of variable
// Bad
// function getUserInfo(): User;
// function getUserDetails(): User;
// function getUserData(): User;

// Good
// function getUser(): User;

// Todo 4: Use searchable names
// Bad
// setTimeout(restart, 86400000);

// Good
/*
const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
setTimeout(restart, MILLISECONDS_IN_A_DAY);
*/

// Todo 5: Use explanatory variables
// Bad
declare const users: Map<string, User>;
for (const keyValue of users) {
  //iterate through users map
}
