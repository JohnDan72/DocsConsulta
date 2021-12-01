// multiply 2 numbers without symbol '*'
const multiply = (a,b) => {
    let total = 0;
    const positivo = (Math.abs(b)) == b;
    for (let ind = 0; ind < Math.abs(b) ; ind++) {
        total += positivo ? a : -a;
    }
    return total
}
console.log(multiply(5,0));


// the biggest number in array only 1 nested loop
const biggestNum = ( arr = [] ) => arr.reduce( (acc , el) => ( acc < el ) ? el : acc )
const arr = [ 32,45,-1,2,67,15,254,21,1,2,3];
console.log(biggestNum(arr));


//delete: undefinded , 0 , null, false
const dropUndNullFalse = ( arr = [] ) => arr.reduce( (acc , el) => {
    if(el) acc.push(el)
    return acc;
}, [] )
const arr2 = [ 32,null,2,false,15,0,21,undefined,2,3];
console.log(dropUndNullFalse(arr2));

// aplanar arrays en un nivel
const flatten = ( arr = []) => arr.reduce(( acc , el ) => acc.concat(el),[]);
const arr3 = [2,4,[[5,7],[2,1]],[1,[]]];
console.log(flatten(arr3))

// histograma de palabras
const ocurrencyHistogram = ( str = '' ) => {
    const loweredCase = str.trim().toLowerCase();
    const wordArray = loweredCase.split(' ');

    return wordArray.reduce( ( acc , el ) => {
        if(!acc[el]) acc[el] = 1;
        else acc[el]++;
        return acc;
    }, {});
}
const testString = '   hola mundo CoMo esta como el COMO el mundo hola hola '
console.log(ocurrencyHistogram(testString));

// devolver la palabra que se repite más veces
const mostRepeated = ( str = '' ) => {
    const loweredCase = str.trim().toLowerCase();
    const wordArray = loweredCase.split(' ');

    let histograma = wordArray.reduce( ( acc , el ) => {
        if(!acc[el]) acc[el] = 1;
        else acc[el]++;
        return acc;
    }, {});

    return Object.entries(histograma).reduce((acc,el) => (acc[1] > el[1])? acc : el );
}
const testString2 = '   hola mundo CoMo esta como el COMO el mundo hola hola '
console.log(mostRepeated(testString));


// check if oration is palindrom

const isPalindrom = ( str = '' ) => {
    const lowercaseRemovedSpaces = str.replace(/ /g,'').toLowerCase();
    const reversedSentence = lowercaseRemovedSpaces.split('').reverse().join('');

    return lowercaseRemovedSpaces === reversedSentence;
}
const testString3 = 'Anita lava la Tina';

console.log(isPalindrom(testString3));