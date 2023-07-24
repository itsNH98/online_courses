class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts () {
      console.log(`${this._name} educates ${numberOfStudents} students at the ${this._level} school level`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const randNum = Math.floor(Math.round() * substituteTeachers.length);
      // console.log(substituteTeachers)
      return substituteTeachers[randNum];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name);
      this._level = 'primary'
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy () {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name);
      this._level = 'high'
      this._numberOfStudents = numberOfStudents;
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam () {
      return this._sportsTeam;
      console.log(this._sportsTeam);
    }
  }
  
  lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  console.log(lorraineHansbury.pickupPolicy)
  console.log(lorraineHansbury.numberOfStudents)
  console.log(lorraineHansbury.name)
  
  
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  
  alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeam)
  console.log(alSmith.numberOfStudents)
  console.log(alSmith.name)