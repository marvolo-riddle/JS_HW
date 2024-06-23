function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.age = null;
  this.attendance = [];
  this.grades = [];

  Student.prototype.getAge = function () {
    return this.age = 2024 - this.birthYear;
  };

  Student.prototype.present = function () {
    Student.validateLength(this.attendance);
    this.attendance.push(true);
    return this.attendance;
  }

  Student.prototype.absent = function () {
    Student.validateLength(this.attendance);
    this.attendance.push(false);
    return this.attendance;
  }

  Student.prototype.setGrade = function (grade) {
    Student.validateLength(this.grades)
    Student.validateGrades(grade);
    this.grades.push(grade);
    return this.grades;
  }

  Student.validateGrades = function (grade) {
    if (typeof grade !== 'number') {
      throw new Error('Grade should be a number!')
    }
  }

  Student.validateLength = function (arr) {
    if (arr.length >= 25) throw new Error('You cannot add more!')
  };

  Student.prototype.summary = function () {
    const sumGrade = this.grades.reduce((a, b) => a + b);
    const finalGrade = sumGrade / this.grades.length;

    const totalPresent = this.attendance.reduce((a, b) => a + b);
    const finalPresent = totalPresent / this.attendance.length

    if (finalGrade > 90 && finalPresent > 0.9) {
      return 'Great!'
    } else if (finalGrade > 90 || finalPresent > 0.9) {
      return 'Good job, but you can do more!'
    } else {
      return 'Looser!'
    }
  }
}


export default Student;

