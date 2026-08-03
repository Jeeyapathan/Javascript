function reverseString(str) {
    return str.split("").reverse().join("");
}

function message() {
    var msg = "Palindrome Checker";

    function display() {
        return msg;
    }

    return display;
}

function checkPalindrome() {

    try {

        var word = document.getElementById("word").value;

        if (word == "") {
            throw "Please enter a string.";
        }

        
        for (var i = 0; i < word.length; i++) {

            var ch = word.charAt(i);

            if (!((ch >= 'A' && ch <= 'Z') ||
                  (ch >= 'a' && ch <= 'z') ||
                  (ch >= '0' && ch <= '9'))) {

                throw "Only alphabets and digits are allowed.";
            }
        }

        if (word.length < 3) {
            throw "Please enter at least 3 characters.";
        }

        if (word.length > 30) {
            throw "Maximum 30 characters allowed.";
        }

        var input = word.toLowerCase();
        var reverse = reverseString(input);

        if (input == reverse) {

            document.getElementById("result").innerHTML =
                "<h3>" + message()() + "</h3>" +
                "<hr>" +
                "<b>Word:</b> " + word +
                "<br><br><b>Result:</b> PALINDROME";

        }
        else {

            document.getElementById("result").innerHTML =
                "<h3>" + message()() + "</h3>" +
                "<hr>" +
                "<b>Word:</b> " + word +
                "<br><br><b>Result:</b> NOT A PALINDROME";

        }

    }
    catch (error) {
        alert(error);
    }

}