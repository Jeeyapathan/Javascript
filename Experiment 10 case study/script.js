document.getElementById("concertForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let ticket = document.getElementById("ticket").value;
    let tickets = document.getElementById("tickets").value;

    document.getElementById("message").innerHTML =
        `✅ Registration Successful!<br>
         Thank you, <b>${name}</b>.<br>
         Your ${tickets} ${ticket} ticket(s) have been reserved.<br>
         Confirmation sent to ${email}.`;

    document.getElementById("concertForm").reset();
});