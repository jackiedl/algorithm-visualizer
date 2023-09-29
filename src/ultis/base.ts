const RED = "bar-red";
const BLUE = "bar-blue";
const ANIMATION_DELAY = 1;

export function swap(arr:number[], x:number, y:number){
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

export async function colorAnimation(animations: any, arrayBars: any){
  for (let i = 0; i < animations.length; i++){
    const [barOne, barTwo] = animations[i];
    changeRed(arrayBars[barOne]);
    changeBlue(arrayBars[barTwo]);
    [arrayBars[barOne].style.height, arrayBars[barTwo].style.height] = [arrayBars[barTwo].style.height, arrayBars[barOne].style.height];
    await new Promise(f => setTimeout(f, ANIMATION_DELAY));
    resetColor(arrayBars[barOne]);
    resetColor(arrayBars[barTwo]);
  }
}

function changeRed(i:HTMLElement){
  i.classList.add(RED);
}
function changeBlue(i:HTMLElement){
  i.classList.add(BLUE);
}

function resetColor(i:HTMLElement){
  i.classList.remove(RED);
  i.classList.remove(BLUE);
}