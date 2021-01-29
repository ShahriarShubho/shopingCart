document.getElementById("phonePlusBtn").addEventListener('click', function(){

    handleProductChange(true, "phone");

})


document.getElementById("phoneMinusBtn").addEventListener('click', function(){

    handleProductChange(false, "phone");

})
document.getElementById("casePlusBtn").addEventListener("click",function(){

    handleProductChange(true, "case");

    // const caseInput = document.getElementById("case-count");
    // const caseCount =  parseInt(caseInput.value);
    // const caseNewCount = caseCount + 1;
    // caseInput.value = caseNewCount;
    // const caseTotal = caseNewCount * 59;
    // document.getElementById("case-total").innerText = caseTotal;
    
});

document.getElementById("caseMinusBtn").addEventListener("click", function(){

    handleProductChange(false, "case");

})

// function addTaka (shubho){

//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount =  parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(shubho == true){
//         phoneNewCount = phoneCount +1
//     }
//     if(shubho ==false && phoneCount > 0){
//         phoneNewCount = phoneCount -1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotalTaka = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotalTaka;
// }

function handleProductChange(isIncrease, product){

    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount +1
    }
    if(isIncrease ==false && productCount > 0){
        productNewCount = productCount -1;
    }
    productInput.value = productNewCount;
    let productTotal = productNewCount;
    if(product == "phone"){
        productTotal = productNewCount * 1219;
    }
    if(product == "case"){
        productTotal = productNewCount *59;
    }
    document.getElementById(product + "-total").innerText = productTotal;
    calculationTotal();
}

function calculationTotal() {

    const phoneTaka = getInput("phone-count");
    const caseTaka = getInput("case-count");
//    const phoneInput = document.getElementById("phone-count");
//    phoneTaka = parseInt(phoneInput.value);
//    const caseInput =  document.getElementById("case-count");
//    caseTaka = parseInt(caseInput.value);

   const subTotalPrice = phoneTaka * 1219 + caseTaka * 59;
   document.getElementById("subTotalTaka").innerText = subTotalPrice;

   const tex = subTotalPrice * .15;
   texNumber =  Math.round(tex)
   document.getElementById("tex").innerText = texNumber;

    const totalPrice = subTotalPrice + texNumber;
    document.getElementById("totalTaka").innerText = totalPrice;
}

function getInput(id){

    const input =  document.getElementById(id);
    inputTaka = parseInt(input.value);
    return inputTaka;
}


// document.getElementById("casePlusBtn").addEventListener("click",function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount =  parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
    
// });