class Student{
    constructor (firstName, lastName, grade){
        //this inside constructor refers to 'Individual instance of class'
        this.firstName = firstName;
        this.lastName = lastName;
        this.education = grade
    }
}

let firstStudent = new Student ("Poorna", "chary", 12)
console.log(firstStudent)
// Student { firstName: 'Poorna', lastName: 'chary', education: 12 }

let secondStudent = new Student("Charan", "N");
// console.log(secondStudent);
// Student { firstName: 'Charan', lastName: 'N', education: undefined }
// now we can also update the value of instance for second student.

secondStudent.education = 10
console.log(secondStudent);
// Student { firstName: 'Charan', lastName: 'N', education: 10 }


//Instance Methods.


class HighSchoolStudent{
    constructor(firstName, lastName){
this.firstName = firstName;
this.lastName =lastName;
    }
    fullName(){
        return `your fullName is ${this.firstName} ${this.lastName}`
    }
}
let student1 = new HighSchoolStudent("james", "son")
console.log(student1)
// HighSchoolStudent { firstName: 'james', lastName: 'son' }

console.log(student1.fullName())
// your fullName is james son