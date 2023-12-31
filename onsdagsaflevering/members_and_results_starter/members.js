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
      const dateOfBirthDate = new Date(dateOfBirth);
      const timeNow = Date.now();
      const dateDifference = timeNow - dateOfBirthDate.getTime();
      const age = dateDifference / (1000 * 60 * 60 * 24 * 365.25);
      this._age = Math.floor(age);
    },
    get age() {
      return this._age;
    },
    set birthday(dateOfBirth) {
      this._birthday = new Date(dateOfBirth);
    },
    get birthday() {
      return this._birthday;
    },
    get junior() {
      if (this.age < 18) {
        return "Junior";
      } else {
        return "Senior";
      }
    },
  };
  MemberObject.name = `${memberdata.firstName} ${memberdata.lastName}`;
  MemberObject.age = memberdata.dateOfBirth;
  MemberObject.birthday = memberdata.dateOfBirth;
  Object.defineProperty(MemberObject, "id", { writeable: false });
  Object.defineProperty(MemberObject, "name", { enumberable: false });
  Object.defineProperty(MemberObject, "image", { enumberable: false });
  return MemberObject;
}
