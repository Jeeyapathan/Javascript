// Function to create an object
function createNumber(num) {

    return {
        value: num,

        // Object function
        getValue: function () {
            return this.value;
        }
    };
}


// Function to find largest number
function getLargest(arr) {

    let largest = arr[0].getValue();

    for (let i = 1; i < arr.length; i++) {

        if (arr[i].getValue() > largest) {
            largest = arr[i].getValue();
        }
    }

    return largest;
}


// Function to find smallest number
function getSmallest(arr) {

    let smallest = arr[0].getValue();

    for (let i = 1; i < arr.length; i++) {

        if (arr[i].getValue() < smallest) {
            smallest = arr[i].getValue();
        }
    }

    return smallest;
}


// Main function
function findNumbers() {

    let input = document.getElementById("numbers").value;

    if (input.trim() === "") {

        document.getElementById("result").innerHTML =
            "<div class='error'>Please enter some numbers.</div>";

        return;
    }


    // Create an empty array
    let numbers = [];


    // Convert input into an array
    let values = input.split(",");


    // PUSH objects into the array
    for (let i = 0; i < values.length; i++) {

        let num = Number(values[i].trim());

        // Check for invalid input
        if (isNaN(num)) {

            document.getElementById("result").innerHTML =
                "<div class='error'>Please enter valid numbers only.</div>";

            return;
        }

        numbers.push(createNumber(num));
    }


    // Find largest
    let largest = getLargest(numbers);


    // Find smallest
    let smallest = getSmallest(numbers);


    // POP the last object
    let removedObject = numbers.pop();


    // Display results
    document.getElementById("result").innerHTML =

        "<div class='result-box'>" +

        "<div class='result-item'>" +
        "<span>Largest Number</span>" +
        "<strong>" + largest + "</strong>" +
        "</div>" +

        "<div class='result-item'>" +
        "<span>Smallest Number</span>" +
        "<strong>" + smallest + "</strong>" +
        "</div>" +

        "<div class='result-item'>" +
        "<span>Popped Number</span>" +
        "<strong>" + removedObject.getValue() + "</strong>" +
        "</div>" +

        "</div>";
}