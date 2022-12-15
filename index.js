class Student{
    constructor(firstName,lastName, grade){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
    }
    introduce(){
        return(`${this.firstName}${this.lastName} has a ${grade}`)
    }
}
class Course{
    constructor(name){
        this.name = name
        this.students = []
    }
    addStudent(student){
        if (student instanceof Student){
            this.students.push(student);
        } else {
            throw new Error(`You can only enter valid student name`)
        }
    }
    describe(){
        return(`${this.name} has ${this.students.length} students.`)
    }
}
class Menu{
    constructor(){
        this.Course = [];   //array because more than one course
        this.selectedCourse = null;  //null because when starting no course selected
    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case '1':
                    this.createCourse();
                    break;
                case '2':
                    this.viewCourse();
                    break;
                case '3':
                    this.deleteCourse();
                    break;
                case '4':
                    this.displayCourse();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert (`Exiting Menu Options`);
    }
    showMainMenuOptions(){
        return prompt(`
        0:  exit
        1:  create new course
        2:  view/display course
        3:  delete course
        4:  show all courses
        `)
    }
    showCourseMenuOptions(courseInfo){
        return prompt(`
        0: exit
        1: add student in course
        2: delete student from course
        
        ${courseInfo}`);
    }
displayCourse(){
        let courseString = '';
        for (let i = 0; i< this.Course.length;i++){
            courseString += i + ')' + this.course[i].name + '\n';
        }
        alert(courseString);
    }
createCourse(){
    let name = prompt('enter name for created class/course');
    this.course.push(new Course(name));
}
viewCourse(){
    let index = prompt('enter class/course to view:');
    if(index> -1 && index < this.course.length){
       this.selectedCourse = this.course[index];
       let description = 'team name: '+this.selectedCourse.name + '\n';
       for (let i = 0; i< this.selectedCourse.students.length; i++){
        description += i + ')' + this.selectedCourse.students[i].name + ' - '+ this.selectedCourse.students[i].resides + '\n'

       }
       let selection = this.showCourseMenuOptions(description);
       switch(selection){
        case '1':
            this.addStudentInCourse();
            break;
        case '2':
            this.deleteStudentFromCourse();
            break;
       }
    }
  }  
}
menu = new Menu();
menu.start();

