
let bill;
let custom;
let people;
 let fini;

let tipamount=document.querySelector('.tip');

let tipTotal=document.querySelector('.total');

let btns=document.querySelectorAll('.btn');

let reset=document.querySelector(".reset");

// check if fini has value from any of the buttons, if not wait for custom to be written,


window.addEventListener('keyup',(e)=>{
    

     bill=document.getElementById("price").valueAsNumber;
    
     custom=document.getElementById("custom").valueAsNumber;
    
     people=document.getElementById("people").valueAsNumber;



 if(isNaN(people)){

        people=1;

    }



getTip(bill,custom,people);

})




function getTip(bil,val,ppl){



    let meno= ((val/100)*bil)/ppl ;

    let tito=(meno +  bil)/ppl;

tipamount.innerHTML=`$${meno}`;

tipTotal.innerHTML=`$${tito}`;



}





btns.forEach((button)=>{



button.addEventListener('click',()=>{

// console.log(button.innerHTML)

 let hwa= button.innerHTML.split(/\%/);

  fini=parseInt(hwa[0],10);
console.log(fini);


getTip(bill,fini,people);


})



})


reset.addEventListener('click',()=>{

tipamount.innerHTML=`$0`;

tipTotal.innerHTML=`$0`;


    document.getElementById("price").valueAsNumber=0;

    document.getElementById("custom").valueAsNumber=0;

     document.getElementById("people").valueAsNumber=1;



})