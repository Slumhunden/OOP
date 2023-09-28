function constructNameParts(fullName) {
  const person = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    _age: 0,
    set fullName(fullName) {
      const names = fullName.split(" ");

      if (names.length === 3) {
        this.firstName = names[0];
        this.middleName = names[1];
        this.lastName = names[2];
      } else {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    get fullName() {
      if (!this.middleName) {
        return `${this.firstName} ${this.lastName}`;
      } else {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
      }
    },
    hasMiddleName: function () {
      if (this.middleName) {
        return true;
      } else {
        return false;
      }
    },
    set age(number) {
      this._age = number;
    },
    get age() {
      return this._age;
    },
    checkAge() {
      if (this._age >= 18) {
        console.log(`The student is ${this._age} old enough`);
      } else {
        console.log(`The student is ${this._age} not old enough`);
      }
    },
  };

  person.fullName = fullName;

  return person;
}

const student = constructNameParts("John Doe");
// console.log(student);
// console.log(student._age);
// student._age = 10;
// student.checkAge();
// console.log(student._age);
Object.freeze(student)
console.log(student);
student._age = 20;
console.log(student._age);
student.checkAge();
