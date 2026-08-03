function showPassword()
{
    var pass = document.getElementById("password");

    if(pass.type=="password")
        pass.type="text";
    else
        pass.type="password";
}

function validateLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    
    if(username=="")
    {
        result.innerHTML="Username cannot be empty";
        result.style.color="red";
        return;
    }

    if(username.length<5)
    {
        result.innerHTML="Username must be at least 5 characters";
        result.style.color="red";
        return;
    }

    
    if(password.length<8)
    {
        result.innerHTML="Password must contain at least 8 characters";
        result.style.color="red";
        return;
    }

    var upper = false;
    var lower = false;
    var digit = false;
    var special = false;

    var specialChar = "@#$%^&*!?";

    for(var i=0; i<password.length; i++)
    {
        var ch = password[i];

        if(ch>='A' && ch<='Z')
            upper = true;

        else if(ch>='a' && ch<='z')
            lower = true;

        else if(ch>='0' && ch<='9')
            digit = true;

        else if(specialChar.indexOf(ch)!=-1)
            special = true;
    }

    if(!upper)
    {
        result.innerHTML="Password must contain one uppercase letter";
        result.style.color="red";
        return;
    }

    if(!lower)
    {
        result.innerHTML="Password must contain one lowercase letter";
        result.style.color="red";
        return;
    }

    if(!digit)
    {
        result.innerHTML="Password must contain one number";
        result.style.color="red";
        return;
    }

    if(!special)
    {
        result.innerHTML="Password must contain one special character";
        result.style.color="red";
        return;
    }

    result.innerHTML=" Login Successful";
    result.style.color="green";
}