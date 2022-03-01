function zeroToEnd(arr: number[]){
let temp = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] != 0){
        temp[i] = arr[i]
    }
}

let f = temp.length;

for (let i = 0; i < f; i++){
    arr[i] = temp[i];
}

for (let i = f; i < arr.length; i++){
    arr[i] = 0;
}

return arr;

}
