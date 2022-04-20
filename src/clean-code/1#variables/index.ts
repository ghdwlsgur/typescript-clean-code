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
declare const bad_users: Map<string, User>;
for (const keyValue of bad_users) {
  // iterate through users map
}

// Good
declare const good_users: Map<string, User>;
for (const [id, user] of good_users) {
  // iterate through users map
}

// Todo 6: Avoid Mental Mapping
// Bad
// const u = getUser();
// const s = getSubscription();
// const t = charge(u, s);

// Good
// const user = getUser();
// const subscription = getSubscription();
// const transaction = charge(user, subscription);

// Todo 7: Don't add unneeded context
// Bad
// type Car = {
//   carMake: string;
//   carModel: string;
//   carColor: string;
// };

// function print(car: Car): void {
//   console.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
// }

// Good
type Car = {
  make: string;
  model: string;
  color: string;
};

function print(car: Car): void {
  console.log(`${car.make} ${car.model} (${car.color})`);
}

// Todo 8: Use default arguments instead of short circuiting or conditionals
// Bad
// function loadPages(count?: number) {
//   const loadCount = count !== undefined ? count : 10;
// }

// Good
function loadPages(count: number = 10) {}

// Todo 9: Use enum to document the intent
// Bad

// const GENRE = {
//   ROMANTIC: 'romantic',
//   DRAMA: 'drama',
//   COMEDY: 'comedy',
//   DOCUMENTARY: 'documentary',
// };

// class Projector {
//   configureFilm(genre) {
//     switch (genre) {
//       case GENRE.RONMANTIC:
//     }
//   }
// }

// Good
// enum GENRE {
//   ROMANTIC,
//   DRAMA,
//   COMEDY,
//   DOCUMENTARY,
// }

// projector.configureFilm(GENRE.COMEDY);

// class Projector {
//   configureFilm(genre) {
//     switch (genre) {
//       case GENRE.ROMANTIC:
//       // some logic to be executed
//     }
//   }
// }
