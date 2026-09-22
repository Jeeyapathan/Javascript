
let form = document.getElementById("myForm");
let fname = document.getElementById("fname");
let user = document.getElementById("user");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let month = document.getElementById("month");
let terms = document.getElementById("terms");
let message = document.getElementById("message");



fname.addEventListener("focus", function() {
    fname.style.backgroundColor = "#fff3cd";
});



month.addEventListener("change", function() {
    alert("Month selected: " + month.value);
});



form.addEventListener("submit", function(e) {

    e.preventDefault();

   
    if (fname.value == "" || user.value == "" || pass.value == "") {
        message.innerHTML = "Please fill all mandatory fields";
        message.style.color = "red";
        return;
    }

    
    if (email.value != "" && !email.value.includes("@")) {
        message.innerHTML = "Invalid Email";
        message.style.color = "red";
        return;
    }

    
    if (pass.value != repass.value) {
        message.innerHTML = "Passwords do not match";
        message.style.color = "red";
        return;
    }

    
    if (!terms.checked) {
        message.innerHTML = "Accept terms and conditions";
        message.style.color = "red";
        return;
    }

    
    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    form.reset();
});