function arrayFromRange(min, max) {
    let res = [];

    for (let i = min; i <= max; ++i) 
        res.push(i);

    return res;
}
console.log(arrayFromRange(-2, 4));


function filtra(array, limite) {
    let res = array.filter(value => {
        return value > limite;
    });

    return res;
}
console.log(filtra([-3, 2, 1, 9], 1));



function ordena(array) {
    let res = array.sort((a, b) => {
        return a < b ? 1 : -1;
    });

    return res;
}
console.log(ordena([5, 2, 3, 3, 4]));



function occurrences(array, element) {
    let output = array.reduce((acc, currValue) => {
        if (currValue === element)
            return acc + 1;
        else 
            return acc;
    }, 0);

    return output;
}
console.log(occurrences([2, 2, 3, 5, 2], 2));