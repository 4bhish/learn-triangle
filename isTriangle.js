const angleInputs = document.querySelectorAll(".angle-input")
const outputDiv = document.querySelector("#result")
const btnCheck = document.querySelector("#check-button")

function addAngle(a,b,c)
{
    const angleResult = a + b + c ;
    return angleResult;
}

btnCheck.addEventListener("click",function clickHandle(){
   const angles = addAngle( Number(angleInputs[0].value),Number(angleInputs[1].value),Number(angleInputs[2].value) );
   if(angles === 180)
   {
    outputDiv.innerText = ("Yayy your Triangle !!");
   } else
   {
    outputDiv.innerText = ("uh Oh Thats not a triangle !!");
   }
})