// 基本
// tsc main.js でコンパイル

// function greeter(person: string) {
//   return 'Hello' + person;
// }

// let user = 'John';
// //let user = [0, 1, 2];

// document.body.innerHTML = greeter(user);

// interfaceを定義できる
// interface Person {
//   fn: string;
//   ln: string;
// }

// function greeter(person: Person) {
//   return 'Hello' + person.fn + 'OK' + person.ln;
// }

// let user = {
//   fn: 'Daisuke',
//   ln: 'Hiraizumi',
// }

// document.body.innerHTML = greeter(user);

class Student {
  fullName: string;
  constructor (
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello' + person.firstName + 'Yes' + person.lastName;
}

let user = new Student('John', 'M', 'User');

document.body.innerHTML = greeter(user);