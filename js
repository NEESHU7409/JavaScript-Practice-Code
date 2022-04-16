class Student{
    constructor(name,rollno,sub1,sub2,sub3){
        this.name=name;
        this.rollno=rollno;
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
    }
       totalMarks(){
        return this.sub1+this.sub2+this.sub3;
        }
        percentage(){
        return this.totalMarks()/3;
        }
        grade(){
        let res=this.percentage();
        if(res>=90)return 'A';
        else if(res>=75)return 'B';
        else return 'C';
    }

}

Student.prototype.print=function print(){
    console.log(`Name = ${this.name.toUpperCase()} RollNo = ${this.rollno} Percentage = ${this.percentage()}  TotalMarks=${this.totalMarks()} Grade = ${this.grade()} `);
}


############################################################################################################################################################################
function student(name,rollno,sub1,sub2,sub3){
    this.name=name;
    this.rollno=rollno;
    this.sub1=sub1;
    this.sub2=sub2;
    this.sub3=sub3;
    function totalMarks(){
    return this.sub1+this.sub2+this.sub3;
    }
    function percentage(){
    return (this.totalMarks())/3;
    }
    function grade(){
    let res=this.percentage();
    if(res>=90)
        return 'A';
    else if(res>=75)
        return 'B';
    else
        return 'C';
    }
}
student.prototype.print=function print(){
    console.log(`Name = ${this.name} Roll No = ${this.rollno} Percentage = ${this.percentage()} TotalMarks = ${this.totalMarks()} Grade = ${this.grade()} `);
}
