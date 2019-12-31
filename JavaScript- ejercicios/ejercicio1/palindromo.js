function palindromo (str) {
    strNorm = str.toLowerCase().replace(/[\s.,]/g,'');
    strRev = strNorm.split('').reverse().join('');
    if(strNorm === strRev){
        return true;
    }
    return false;
}

// let str1 = 'A cavar a caravaca';
// let str2 = 'hola caracola';
// let str3 = 'A man, a plan, a canal. Panama';
// console.log(palindromo(str1));
// console.log(palindromo(str2));
// console.log(palindromo(str3));


function palindromo_loop (str) {
    str = str.toLowerCase().replace(/[\s.,]/g, '');
    for (let i = 0; i < str.length / 2 ; i++){
        if (str[i] !== str[str.length - 1 - i]){
            return false;
        }
        console.log(str[i], str[str.length - 1 - i]);
    }
    return true;
}

let str1 = 'A cavar a caravaca';
let str2 = 'hola caracola';
let str3 = 'A man, a plan, a canal. Panama';
console.log(palindromo_loop(str1));
console.log(palindromo_loop(str2));
console.log(palindromo_loop(str3));