// REST

function soma(a, b, ...params){
    return params
}
console.log(soma(1,3,4,5,6,7,8))

// SPREAD

const arrA = [1,2,3]
const arrB = [4,5,6]
const arr3 = [...arrA, ...arrB]
console.log(arr3)