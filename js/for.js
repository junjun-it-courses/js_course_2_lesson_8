let arr = [
    'Vladimir',
    'Marat',
    'Viktor',
    'Sergey',
    'Artem'
];


// let obj = {
//     num: 4
// }

// console.log(arr)
// console.log(arr.length, typeof arr.length)
// console.log(typeof arr.length)

for(let i = 0; i <= arr.length - 1; i++) {
    let newWord = '';

    for(let c = 0; c <= arr[i].length - 1; c++) {

        let symb = arr[i][c];

        if(symb === 'r') {
            newWord = newWord + '*';
            console.log(newWord)
        } else {
            newWord = newWord + symb;
            console.log(newWord)
        }

    }

    // console.log(newWord)

    console.log('----------Separate line------------');
}