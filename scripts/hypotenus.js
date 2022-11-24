const baseVal = document.querySelector("#base")
const heightVal = document.querySelector("#height")
const btnCal = document.querySelector("#calculate")
const result = document.querySelector("#result")

function calculateHypotenuse(a,b)
{
    const sumOfsqr = a*a + b*b;
    return sumOfsqr;
}
function handleClick()
{
    const sqrRoot = Math.sqrt(calculateHypotenuse(Number(baseVal.value),Number(heightVal.value)));
    result.innerText = (`Hypotenuse of given Value is ${sqrRoot}`)
}

btnCal.addEventListener("click",handleClick)

console.log(calculateHypotenuse(4,5))