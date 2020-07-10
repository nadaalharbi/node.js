

// Using Async- await to handle chained promisies with a more Readable and un-nested look
const add = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (num2 < 0 || num2 < 0) ? reject('Error: Adding numbers must NOT be Negative.') : resolve(num1 + num2);
        }, 2000);
    });
}

/*
Promise chaining , await prevent moving to next line until it executed and have a result
--> so if the first calling return a rejecting then the two other callings won't be excuted.
*/
const doWorkAsync = async () => {
    const sum = await add(1, 99); // 100
    const sum2 = await add(sum, 40);// 140
    const sum3 = await add(sum2, 25);//165
    return sum3
};

doWorkAsync().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});