function convert()
{
    let number=document.getElementById("number").value;
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;

    if(from=="VND" && to=="USD") document.getElementById("Result").innerHTML = "Result: " +number/23000 + " USD";
    if(from=="USD" && to=="VND") document.getElementById("Result").innerHTML = "Result: " +number*23000 + " USD";
    if(from==to) document.getElementById("Result").innerHTML = "Result: Choose currently you want to convert";

}

