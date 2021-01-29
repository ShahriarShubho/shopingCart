document.getElementById("phonePlusBtn").addEventListener("click",function(){
   handleProductChange(true, "phone")
})

document.getElementById("phoneMinusBtn").addEventListener("click",function(){
   handleProductChange(false, "phone")
})

document.getElementById("casePlusBtn").addEventListener("click",function(){
    handleProductChange(true, "case")
 })
 
 document.getElementById("caseMinusBtn").addEventListener("click",function(){
    handleProductChange(false, "case")
 })
 document.getElementById("clear-phone").addEventListener("click", function(){

    removeElement("phone");
  
 })

 document.getElementById("clear-case").addEventListener("click", function(){

    removeElement("case");
  
 })
 

function handleProductChange(isIncrease, product){
    let clickInput = document.getElementById(product + "-count");
    let clickNumber = parseInt(clickInput.value);
    let clickNewInput = clickNumber;
    if(isIncrease == true){
        clickNewInput = clickNumber + 1;
    }
    if(isIncrease==false && clickNumber > 0){
        clickNewInput = clickNumber - 1;
    }
    clickInput.value = clickNewInput;
    let takaCount = document.getElementById(product + "-total");
    if(product=="phone"){
        takaCount.innerText = clickNewInput * 1219;
    }
    if(product == "case"){
        takaCount.innerText = clickNewInput * 59;
    }
   calculationTotal();
}

function calculationTotal(){
    const getNumber = getInput("phone-count");
    const caseNumber = getInput("case-count");
    
    const subTotalPrice = getNumber * 1219 + caseNumber * 59;
    document.getElementById("subTotalTaka").innerText = subTotalPrice;

    const tex = subTotalPrice * .15;
    document.getElementById("tex").innerText = Math.round(tex);

    const totalPrice = subTotalPrice + tex;
    document.getElementById("totalTaka").innerText = Math.round(totalPrice);

}

function getInput(id){

    const getValue = document.getElementById(id).value;
    const getNumber = parseInt(getValue);
    return getNumber;
}

function removeElement(element){

    let removeInput = document.getElementById(element + "-count");
    let removeNumber = parseInt(removeInput.value);
    let clearInput = removeNumber * 0;
    removeInput.value = clearInput;
    document.getElementById(element + "-total").innerText = clearInput;
    const getNumber = getInput("phone-count");
    const caseNumber = getInput("case-count");
    if(element == "phone"){
        subTotalPrice = getNumber *0 + caseNumber * 59;
    }
    if(element == "case"){
        subTotalPrice = caseNumber * 0 + getNumber * 1219;
    }
    document.getElementById("subTotalTaka").innerText = subTotalPrice;


}
