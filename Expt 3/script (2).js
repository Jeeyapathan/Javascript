function calculateGrade()
{
    var name = document.getElementById("name").value;
    var marks = parseInt(document.getElementById("marks").value);

    if(name=="")
    {
        alert("Enter Student Name");
        return;
    }

    if(isNaN(marks))
    {
        alert("Enter Marks");
        return;
    }

    if(marks<0 || marks>100)
    {
        alert("Marks should be between 0 and 100");
        return;
    }

    var grade;

    if(marks>=90)
        grade="A+";
    else if(marks>=80)
        grade="A";
    else if(marks>=70)
        grade="B";
    else if(marks>=60)
        grade="C";
    else if(marks>=50)
        grade="D";
    else
        grade="Fail";

    console.log("Student:", name);
    console.log("Marks:", marks);
    console.log("Grade:", grade);

    document.getElementById("result").innerHTML =
    "<h3>Result</h3>" +
    "Name: " + name + "<br>" +
    "Marks: " + marks + "<br>" +
    "Grade: " + grade;
}