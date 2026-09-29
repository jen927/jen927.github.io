let x;
console.log(x); // will say 'undefined'


function assignX(id, num) {
    x = num;
    console.log(x); // showed show num value
    let element = document.getElementById(id);
    element.innerHTML += x.toString();   
}