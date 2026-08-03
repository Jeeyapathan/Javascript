function calculateBill()
{

    let laptop = Number(document.getElementById("laptop").value);
    let mobile = Number(document.getElementById("mobile").value);
    let headphone = Number(document.getElementById("headphone").value);
    let keyboard = Number(document.getElementById("keyboard").value);
    let mouse = Number(document.getElementById("mouse").value);
    let monitor = Number(document.getElementById("monitor").value);

    let total =
    (laptop * 50000) +
    (mobile * 20000) +
    (headphone * 3000) +
    (keyboard * 1500) +
    (mouse * 800) +
    (monitor * 10000);

    let gst = total * 0.15;

    let discount = total * 0.10;

    let finalAmount = total + gst - discount;

    document.getElementById("total").innerHTML = total.toFixed(2);

    document.getElementById("gst").innerHTML = gst.toFixed(2);

    document.getElementById("discount").innerHTML = discount.toFixed(2);

    document.getElementById("final").innerHTML = finalAmount.toFixed(2);

} 