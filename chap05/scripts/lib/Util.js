const AUTHOR = 'YAMADA, Yoshihiro';

class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
    getName() {
    return this.lastName + this.firstName;
  }
}

class Area {
  constructor(){}

  static getTriangle(base, height) {
    return base * height / 2;
  };
  
  static getDiamond(width, height) {
    return width * height / 2;
  };
}

export default Member;
export default Area;
