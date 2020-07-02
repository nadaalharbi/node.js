console.log('Starting')
// This method will excute the code after amount of time specified
setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

console.log('Stopping')

//-----------------------------


const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)

    }, 2000)
}
// Using of callback is that after 2sec print out the result of sum
add(1, 3, (sum) => {
    console.log(sum)
})