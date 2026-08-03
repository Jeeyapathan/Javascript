// ====================== LOGIN PAGE ======================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let prn = document.getElementById("prn").value.trim();
        let password = document.getElementById("password").value.trim();
        let error = document.getElementById("loginError");

        error.innerHTML = "";

        // PRN Validation (Only Numbers)
        if (!/^[0-9]+$/.test(prn)) {
            error.innerHTML = "❌ PRN should contain only numbers.";
            return;
        }

        // Password Validation
        if (password.length < 8) {
            error.innerHTML = "❌ Password must contain at least 8 characters.";
            return;
        }

        // Save PRN
        localStorage.setItem("studentPRN", prn);

        // Open Grade Page
        window.location.href = "grade.html";

    });

}


// ====================== GRADE PAGE ======================

window.onload = function () {

    let savedPRN = localStorage.getItem("studentPRN");

    if (savedPRN && document.getElementById("studentPRN")) {

        document.getElementById("studentPRN").value = savedPRN;

    }

};


// ====================== GRADE CALCULATION ======================

function calculateGrade() {

    let name = document.getElementById("studentName").value.trim();
    let prn = document.getElementById("studentPRN").value.trim();
    let marks = parseFloat(document.getElementById("marks").value);

    if (name === "" || prn === "" || isNaN(marks)) {
        alert("Please fill all the fields.");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    let grade = "";
    let status = "";

    if (marks >= 90) {
        grade = "A+";
        status = "PASS";
    }
    else if (marks >= 80) {
        grade = "A";
        status = "PASS";
    }
    else if (marks >= 70) {
        grade = "B+";
        status = "PASS";
    }
    else if (marks >= 60) {
        grade = "B";
        status = "PASS";
    }
    else if (marks >= 50) {
        grade = "C";
        status = "PASS";
    }
    else if (marks >= 40) {
        grade = "D";
        status = "PASS";
    }
    else {
        grade = "F";
        status = "FAIL";
    }

    document.getElementById("nameResult").innerHTML = name;
    document.getElementById("prnResult").innerHTML = prn;
    document.getElementById("marksResult").innerHTML = marks;
    document.getElementById("gradeResult").innerHTML = grade;
    document.getElementById("statusResult").innerHTML = status;

    // Grade Color
    if (grade === "A+") {
        document.getElementById("gradeResult").style.color = "green";
    }
    else if (grade === "A") {
        document.getElementById("gradeResult").style.color = "blue";
    }
    else if (grade === "B+" || grade === "B") {
        document.getElementById("gradeResult").style.color = "orange";
    }
    else {
        document.getElementById("gradeResult").style.color = "red";
    }

    // Status Color
    if (status === "PASS") {
        document.getElementById("statusResult").style.color = "green";
    } else {
        document.getElementById("statusResult").style.color = "red";
    }
}


// ====================== LOGOUT ======================

function logout() {

    localStorage.removeItem("studentPRN");

    alert("Logged out successfully.");

    window.location.href = "login.html";

}