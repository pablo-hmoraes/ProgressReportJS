// operadores booleanos
function selectColor(userColor) {
    defaultColor = 'purple';
    color = userColor || defaultColor;
    console.log(color);
}

selectColor('green')
selectColor();


// controle de fluxo 1
function sum(array, num) {
    let output = 0;
    for (let n of array)
        if (n >= num)
            output += n;

    return output;
}
console.log(sum([2, 4, 2], 1));


// controle de fluxo 2
function doubleOrNothing(array) {
    for(let i in array)
        if (array[i] % 2 === 0)
            console.log(`[${i}]: ${array[i] * 2}`);
        else 
            (console.log(`[${i}]: nothing`))
}
doubleOrNothing([2,3,5,8]);






