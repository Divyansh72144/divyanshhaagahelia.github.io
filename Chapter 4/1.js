function calculateFee(){
    var price;
    price=document.getElementById("price").value;
    var fee;
    fee=3.44*price/100;
    var min_fee=Number(2400);
    if (fee>2400){
        document.getElementById("fee").innerHTML="Real state agent's fee is "+fee.toFixed(2)+" euros"
    }
    else{document.getElementById("fee").innerHTML="Real state agent's fee is "+min_fee.toFixed(2)+" euros"}
}