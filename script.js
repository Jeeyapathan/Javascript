function generateBill(){

    let customer = document.getElementById("customer").value;

    let product = document.getElementById("product").value;

    let price = Number(document.getElementById("price").value);

    let quantity = Number(document.getElementById("quantity").value);

    if(customer=="" || product=="" || price<=0 || quantity<=0){

        alert("Please fill all details.");

        return;
    }

    let subtotal = price * quantity;

    let gst = subtotal * 18 / 100;

    let total = subtotal + gst;

    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);

    document.getElementById("gst").innerHTML = gst.toFixed(2);

    document.getElementById("total").innerHTML = total.toFixed(2);

}

function clearData(){

    document.getElementById("customer").value="";

    document.getElementById("product").value="";

    document.getElementById("price").value="";

    document.getElementById("quantity").value="";

    document.getElementById("subtotal").innerHTML="0";

    document.getElementById("gst").innerHTML="0";

    document.getElementById("total").innerHTML="0";

}