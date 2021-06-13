class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(nameParam, level, students = []) {
    this.name = nameParam;
    this.level = level;
    this.students = students;
  }
  // create registerStudent function = planning ...
  registerStudent(studentToRegister) {
    // Planning ...
    // test function is working
    // console.log('registering student:', studentToRegister.email);
    // this.students.push(studentToRegister);
    // add variable parameter to pass studentToRegister
    // test student to register is passing through correctly
    // write an if statement to compare studentToRegister with students in current students array for duplicate email
    // test the compare function is comparing correct values
    // if student not in students, push student to students =[]
    // test the studentToRegister is passed in students
    // else studentToRegister is in students=[] do not add
    // test studentToRegister is not in students
    // return students array when done
    let capitalizedStudentToRegister = studentToRegister.name.slice(0,1).toUpperCase() + studentToRegister.name.slice(1);
    if (this.students.filter(student => student.email === studentToRegister.email).length > 0) {
      console.log(`${capitalizedStudentToRegister} already exist! ${capitalizedStudentToRegister} not added!`);
    } else {
      this.students.push(studentToRegister);
      console.log(`${capitalizedStudentToRegister} added!`)
    }

    console.log(this.students);
  }
  
}



// students
const trinity = new Student('trinity', 'trinity@gmail.com', 'washington');
const neo = new Student('neo', 'neo@gmail.com', 'zion');
const morpheus = new Student('morpheus', 'morpheus@gmail.com', 'matrix');
const natira = new Student('natira', 'natira@gmail.com', 'pandora');
const jake = new Student('jake', 'jake@gmail.com', 'padora');

// bootcamps
const nucamp = new Bootcamp('nucamp', 'advanced');
const fullStack = new Bootcamp('full Stack', 'beginner')
// test
console.log(trinity);
console.log(neo);
console.log(morpheus);
console.log(natira);
console.log(jake);




