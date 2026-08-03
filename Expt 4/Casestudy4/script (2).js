function validateVehicle() {

    try {

        var number = document.getElementById("vehicle").value.toUpperCase();

        if (number == "") {
            throw "Registration number should not be empty.";
        }

        if (number.length != 10) {
            throw "Registration number must be exactly 10 characters.";
        }

        
        for (var i = 0; i < 2; i++) {
            var ch = number.charAt(i);
            if (!(ch >= 'A' && ch <= 'Z')) {
                throw "First two characters must be alphabets.";
            }
        }

        
        for (var i = 2; i < 4; i++) {
            var ch = number.charAt(i);
            if (!(ch >= '0' && ch <= '9')) {
                throw "Third and fourth characters must be digits.";
            }
        }

        
        for (var i = 4; i < 6; i++) {
            var ch = number.charAt(i);
            if (!(ch >= 'A' && ch <= 'Z')) {
                throw "Fifth and sixth characters must be alphabets.";
            }
        }

        
        
        for (var i = 6; i < 10; i++) {
            var ch = number.charAt(i);
            if (!(ch >= '0' && ch <= '9')) {
                throw "Last four characters must be digits.";
            }
        }

        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML =
            "<b>" + number + "</b> is a VALID Registration Number.";

    }
    catch (error) {

        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = error;

    }

}