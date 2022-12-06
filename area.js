const sides = document.querySelectorAll(".sides")
const btnCal = document.querySelector("#check")
const result =document.querySelector("#result")


function semiPerimeter(a,b,c)
{
    const semiPerimeter = (a + b + c)/2;
    const calculation = semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c);

    const area = Math.sqrt(calculation)

    return area;
}

function handleClick()
{
    const sideOne = Number(sides[0].value);
    const sideTwo = Number(sides[1].value);
    const sideThree = Number(sides[2].value);
    
    if(sideOne && sideTwo && sideThree ){
        const areaOftriangle = semiPerimeter(sideOne,sideTwo,sideThree)
        result.innerText = (`The Area Of Triangle Using Heron's Formula is ${areaOftriangle}`)
  } else
  {
    result.innerText = "Make sure you have given value for all side."
  }
}

btnCal.addEventListener("click",handleClick)
