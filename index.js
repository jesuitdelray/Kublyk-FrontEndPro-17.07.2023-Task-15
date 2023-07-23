// 1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const array = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4,
    47,
]

const positiveNumbers = array.filter(item => item > 0)

const countPositiveNumbers = positiveNumbers.length
const sumPositiveNumbers = positiveNumbers.reduce((acc, cur) => acc + cur)

console.log(`1. The number of positive elements : ${countPositiveNumbers}`)
console.log(`1. The sum of positive elements : ${sumPositiveNumbers}`)

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

let minNumberInArray = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumberInArray) {
        minNumberInArray = array[i]
    }
}

console.log(`2. The smallest number in array : ${minNumberInArray}`)

// 3. Знайти максимальний елемент масиву та його порядковий номер.

let maxNumberInArray = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumberInArray) {
        maxNumberInArray = array[i]
    }
}

console.log(`3. The biggest number in array : ${maxNumberInArray}`)

// 4. Визначити кількість негативних елементів.

const negativeNumbers = array.filter(item => item < 0)

const countNegativeNumbers = negativeNumbers.length

console.log(`4. The number of negative elements : ${countNegativeNumbers}`)

// 5. Знайти кількість непарних позитивних елементів.

const odd = []

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        odd.push(array[i])
    }
}

console.log(`5. Odd numbers in array : ${odd.length}`)

// 6. Знайти кількість парних позитивних елементів.

const even = []

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        even.push(array[i])
    }
}

console.log(`6. Even numbers in array : ${even.length}`)

// 7. Знайти суму парних позитивних елементів.

const sumOfEvenNumbers = even.reduce((acc, cur) => acc + cur)

console.log(`7. Sum of even numbers : ${sumOfEvenNumbers}`)

// 8. Знайти суму непарних позитивних елементів.

const sumOfOddNumbers = odd.reduce((acc, cur) => acc + cur)

console.log(`8. Sum of odd numbers : ${sumOfOddNumbers}`)

// 9. Знайти добуток позитивних елементів.

const multiplyPositiveNumbers = positiveNumbers.reduce((acc, cur) => acc * cur)

console.log(`9. Multiply positive numbers : ${multiplyPositiveNumbers}`)

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

let maxNumberInArray2 = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumberInArray2) {
        maxNumberInArray2 = array[i]
    }
}

const newArray = array.map(item => (maxNumberInArray2 > item ? (item = 0) : item))

console.log(`10. Find maximum number and change other to 0 : ${newArray}`)
