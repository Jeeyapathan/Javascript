function validateForm()
{

    let name=document.getElementById("name").value;
    let prn=document.getElementById("prn").value;
    let email=document.getElementById("email").value;
    let course=document.getElementById("course").value;

    if(name=="")
    {
        alert("Enter Name");
        return false;
    }

    if(prn=="")
    {
        alert("Enter PRN");
        return false;
    }

    if(email=="")
    {
        alert("Enter Email");
        return false;
    }

    if(course=="")
    {
        alert("Enter Course");
        return false;
    }

    if(!email.includes("@"))
    {
        alert("Invalid Email");
        return false;
    }

    console.log("Form Validation Successful");

    alert("Form Submitted Successfully");

    return true;
}

function displayStudent()
{

    document.getElementById("dname").innerHTML=
    document.getElementById("name").value;

    document.getElementById("dprn").innerHTML=
    document.getElementById("prn").value;

    document.getElementById("demail").innerHTML=
    document.getElementById("email").value;

    document.getElementById("dcourse").innerHTML=
    document.getElementById("course").value;

    console.info("Student Details Displayed");

    console.log("Display Function Executed");

    console.warn("Always verify student information before submission.");

}