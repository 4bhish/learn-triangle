btnSubmit = document.querySelector("#submit")
formInfo = document.querySelector("#form-data")

btnSubmit.addEventListener("click",function submitHandler(){
    const formResults  = new FormData(formInfo);
    console.log(formResults)
})