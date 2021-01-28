
//1+ ON  click on plus icon

const plusIconCasing = document.getElementById("plusCasing");
plusIconCasing.addEventListener("click",function(){
    let casing_quantity = document.getElementById("casing_quantity").value;
    let casing_quantity_value = parseFloat(casing_quantity);

    let casing_quantity_new = casing_quantity_value + 1;
    
    document.getElementById("casing_quantity").value = casing_quantity_new;



    const casingPriceSingle = 59;
    const casingPrice = document.getElementById("casingPrice").innerText;
    const casingPriceNum = parseFloat(casingPrice);

    let totalPrice = casingPriceNum + casingPriceSingle;
    document.getElementById("casingPrice").innerText = totalPrice;

  })


const minusIconCasing = document.getElementById("minusIcon");

minusIconCasing.addEventListener("click",function(){
    let casing_quantity = document.getElementById("casing_quantity").value;
    let casing_quantity_value = parseFloat(casing_quantity);
    let casing_quantity_minus = casing_quantity_value - 1;
    document.getElementById("casing_quantity").value = casing_quantity_minus;

    if (document.getElementById("casing_quantity").value< 0 ){
        document.getElementById("casing_quantity").value = 0;
    }
    
    const casingPriceSingle = 59;
    const casingPrice = document.getElementById("casingPrice").innerText;
    const casingPriceNum = parseFloat(casingPrice);

    let totalPrice = casingPriceNum - casingPriceSingle;

    document.getElementById("casingPrice").innerText = totalPrice;


   if(parseFloat(document.getElementById("casingPrice").innerText)<0){
    document.getElementById("casingPrice").innerText = 0;
   }


})



function changeSpanText(){

}