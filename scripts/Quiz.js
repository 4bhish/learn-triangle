btnSubmit = document.querySelector("#submit")
formInfo = document.querySelector("#form-data")
outputDiv = document.querySelector("#score")

const correctAns = ["90", "right angled", "Equilateral","(√3/2)a2","3","60 cm","10 cm"];

btnSubmit.addEventListener("click",function submitHandler(){
    const formResults  = new FormData(formInfo);
    let i=0;
    let score = 0;
    for(let value of formResults.values(formInfo))
    {
        if(value === correctAns[i])
        {
            score++;
        }
        i++;
    }
    outputDiv.innerText =(`You have scored ${score}/7`);
})