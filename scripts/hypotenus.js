const sides = document.querySelectorAll(".side")
const btnCal = document.querySelector("#calculate")
const result = document.querySelector("#result")

function calculateHypotenuse(a,b)
{
    const sumOfsqr = a*a + b*b;
    return sumOfsqr;
}
function handleClick()
{
    if(sides[0].value && sides[1].value)
    {
        const sumOfSquares = calculateHypotenuse(
            Number(sides[0].value),
            Number(sides[1].value)
          );
          const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        result.innerText = (`Hypotenuse of given Value is ${lengthOfHypotenuse}`)
    } else
    {
        result.innerText="You should give number for both sides !"
    }
}

btnCal.addEventListener("click",handleClick)

console.log(calculateHypotenuse(4,5))