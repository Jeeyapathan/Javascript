function processString() {

    let paragraph = document.getElementById("paragraph").value.trim();
    let email = document.getElementById("email").value.trim();


    // 1. split() - Split paragraph into words
    let words = paragraph
        ? paragraph.split(" ")
        : [];


    // 2. Count vowels without Regular Expression
    let vowels = [];
    let vowelCount = 0;

    for (let i = 0; i < paragraph.length; i++) {

        let character = paragraph[i].toLowerCase();

        if (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        ) {
            vowels.push(paragraph[i]);
            vowelCount++;
        }
    }


    // 3. replace() without Regular Expression
    let replacedParagraph =
        paragraph.split("JavaScript").join(
            "JavaScript Programming"
        );

    // Also handle lowercase javascript
    replacedParagraph =
        replacedParagraph.split("javascript").join(
            "JavaScript Programming"
        );


    // 4. indexOf()
    let searchWord = "powerful";

    let position =
        paragraph.toLowerCase().indexOf(
            searchWord.toLowerCase()
        );


    // 5. Email validation WITHOUT Regular Expression
    let emailResult = "Invalid Email Address";

    if (isValidEmail(email)) {
        emailResult = "Valid Email Address";
    }


    // 6. Extract emails WITHOUT Regular Expression
    let emailText =
        "For queries contact student@example.com or admin@college.edu";

    let extractedEmails = extractEmails(emailText);


    // 7. Reverse paragraph
    let reversedParagraph =
        paragraph
            .split("")
            .reverse()
            .join("");


    // Display output
    document.getElementById("output").innerHTML = `

        <div class="result-card full">

            <h3>1. Original Paragraph</h3>

            <p>
                ${escapeHTML(paragraph) ||
                "No paragraph entered."}
            </p>

        </div>


        <div class="result-card">

            <h3>2. split() — Words</h3>

            <p>
                ${
                    words.length
                        ? escapeHTML(words.join(", "))
                        : "No words found."
                }
            </p>

        </div>


        <div class="result-card">

            <h3>3. Vowel Count</h3>

            <p>
                Vowels:
                ${
                    vowels.length
                        ? escapeHTML(vowels.join(", "))
                        : "No vowels found."
                }

                <br><br>

                Total vowels:
                <b>${vowelCount}</b>
            </p>

        </div>


        <div class="result-card">

            <h3>4. replace() — Replace Text</h3>

            <p>
                ${escapeHTML(replacedParagraph)}
            </p>

        </div>


        <div class="result-card">

            <h3>5. indexOf() — Search Word</h3>

            <p>

                Position of
                <b>${escapeHTML(searchWord)}</b>:

                <b>${position}</b>

            </p>

        </div>


        <div class="result-card">

            <h3>6. Email Validation</h3>

            <p>

                Email:
                <b>
                    ${
                        escapeHTML(email) ||
                        "Not entered"
                    }
                </b>

                <br><br>

                Result:

                <b class="${
                    emailResult === "Valid Email Address"
                        ? "valid"
                        : "invalid"
                }">

                    ${emailResult}

                </b>

            </p>

        </div>


        <div class="result-card">

            <h3>7. Extracted Email Addresses</h3>

            <p>

                ${
                    extractedEmails.length
                        ? extractedEmails
                            .map(escapeHTML)
                            .join("<br>")
                        : "No email address found."
                }

            </p>

        </div>


        <div class="result-card full">

            <h3>8. Reversed Paragraph</h3>

            <p>

                ${
                    escapeHTML(reversedParagraph) ||
                    "No paragraph entered."
                }

            </p>

        </div>

    `;
}


/*
    Email validation WITHOUT Regular Expression
*/
function isValidEmail(email) {

    // Must contain exactly one @
    let atPosition = email.indexOf("@");

    if (atPosition === -1) {
        return false;
    }

    if (email.indexOf("@", atPosition + 1) !== -1) {
        return false;
    }


    // Get username and domain
    let username =
        email.substring(0, atPosition);

    let domain =
        email.substring(atPosition + 1);


    // Username cannot be empty
    if (username.length === 0) {
        return false;
    }


    
    if (domain.length === 0) {
        return false;
    }


    
    let dotPosition =
        domain.lastIndexOf(".");

    if (dotPosition === -1) {
        return false;
    }


   
    if (
        dotPosition === 0 ||
        dotPosition === domain.length - 1
    ) {
        return false;
    }


    
    let extension =
        domain.substring(dotPosition + 1);

    if (extension.length < 2) {
        return false;
    }


    return true;
}



function extractEmails(text) {

    let words = text.split(" ");
    let emails = [];

    for (let i = 0; i < words.length; i++) {

        let word = words[i];

        
        word = word.replace(",", "");
        word = word.replace(".", ".");


        let atPosition = word.indexOf("@");

        let dotPosition = word.lastIndexOf(".");

        if (
            atPosition > 0 &&
            dotPosition > atPosition &&
            dotPosition < word.length - 1
        ){

            if (!emails.includes(word)) {
                emails.push(word);
            }
        }
    }

    return emails;
}



function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}