export function constructMember(memberdata) {
  const MemberObject = {
    id: memberdata.id,
    _name: undefined,
    active: memberdata.isActiveMember,
    competitive: memberdata.isCompetitive,
    _birthday: undefined,
    email: memberdata.email,
    gender: memberdata.gender,
    image: memberdata.image,
    hasPayed: memberdata.hasPayed,
    _age: undefined,
    set name(name) {
      this._name = name;
    },
    get name() {
      return this._name;
    },
    set age(dateOfBirth) {
      const timeNow = Date.now();
      const dateDifference = timeNow - dateOfBirth.getTime();
      const age = dateDifference / (1000 * 60 * 60 * 24 * 365.25);
      this._age = Math.floor(age);
    },
    get age() {
      return this._age;
    },
    set birthday(dateOfBirth) {
      this._birthday = new Intl.DateTimeFormat("da-dk", {
        dateStyle: "medium",
      }).format(dateOfBirth);
    },
    get birthday() {
      return this.birthday;
    },
    get junior() {
      if (this.age < 18) {
        return "Junior";
      } else {
        return "Senior";
      }
    },
  };
  MemberObject.name = `${memberdata.firstName} + " " + ${memberdata.lastName}`;
  MemberObject.age = memberdata.dateOfBirth;
  MemberObject.birthday = memberdata.dateOfBirth;
  Object.defineProperties(MemberObject, "id", { writeable: false });
  Object.defineProperties(MemberObject, "name", { enumberable: false });
  Object.defineProperties(MemberObject, "image", { enumberable: false });
  return MemberObject;
}
