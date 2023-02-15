const loanAmount = document.querySelector('.loanAmount')
const loanTenure = document.querySelector('.tenure')
const loanRate = document.querySelector('.interset')
const monthlyemi =document.querySelector('.monthlyemi')
const principalamount =document.querySelector('.principalamount')
const loanoninterest =document.querySelector('.loanoninterest')
const totalamount =document.querySelector('.totalamount')

const calculate = document.querySelector('.btn')

calculate.addEventListener('click', function(){
    amount = loanAmount.value;
    tenure = (loanTenure.value)*12;
    rate = (loanRate.value)/12/100;
     

    emi = ((amount * rate * (1+rate) ** tenure) /(((1+rate)**tenure)-1));
   // console.log(emi);
   
    total = emi * tenure;
    interest = total-amount;
    
    monthlyemi.innerHTML = Math.floor(emi);
    principalamount.innerHTML = Math.floor(amount);
    loanoninterest.innerHTML = Math.floor(interest);
    totalamount.innerHTML = Math.floor(total);

})