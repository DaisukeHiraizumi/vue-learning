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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello' + person.firstName + 'Yes' + person.lastName;
}
var user = new Student('John', 'M', 'User');
document.body.innerHTML = greeter(user);
