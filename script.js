const testingElement = document.getElementById('testing');
const foodType=document.querySelector('food-type');
testingElement.addEventListener('click', ()=>{
    const newVar = testingElement.innerHTML;
    console.log(newVar);
})
