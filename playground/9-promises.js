// Using promises:
const doPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!!');
    }, 2000);
});

doPromises.then((result) => {
    console.log('Promise: The result is: ', result);
}).catch((error) => {
    console.log('Promise: The result is: ', error);
});

// Promises Chaining:

const add = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 2000);
    });
}

add(1, 1).then((sum) => {
    console.log(sum);// 1+1 = 2
    // Send another promise than takes the ressult of first promise, and send it back with 4 
    return add(sum, 4);
}).then((sum2) => {
    console.log(sum2);/// 2+ 4 =6
}).catch((error) => {
    console.log(error);
});




//-------------------------------------
// Using callback
const doCallback = (callback) => {
    setTimeout(() => {
        callback('Error!!', undefined);
        callback('Error!!2', undefined);

    }, 2000);
}

doCallback((error, result) => {
    if (error) {
        return console.log("Callback: The is error  : " + error);
    }
    console.log(result)
});
