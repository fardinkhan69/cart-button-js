
//1+ ON  click on plus icon

const plusIconCasing = document.getElementById("plusCasing");
plusIconCasing.addEventListener("click",function(){
    let casing_quantity = document.getElementById("casing_quantity").value;
    let casing_quantity_value = parseFloat(casing_quantity);

    let casing_quantity_new = casing_quantity_value + 1;
    
    document.getElementById("casing_quantity").value = casing_quantity_new;

  })


const minusIconCasing = document.getElementById("minusIcon");

minusIconCasing.addEventListener("click",function(){
    let casing_quantity = document.getElementById("casing_quantity").value;
    let casing_quantity_value = parseFloat(casing_quantity);
    let casing_quantity_minus = casing_quantity_value - 1;
    document.getElementById("casing_quantity").value = casing_quantity_minus;
})