// Using callback
const doCallback = (callback)=>{
    setTimeout(()=>{
        callback('Error!!',undefined);
        callback('Error!!2',undefined);

    }, 2000);
}

doCallback((error, result)=>{
    if(error){
        return console.log("Callback: The is error  : "+error);
    }
    console.log(result)
});



//-------------------------------------
// Using promises:
const doPromises = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Success!!');

    },2000);
});

doPromises.then((result)=>{
    console.log('Promise: The result is: ', result);
}).catch((error)=>{
    console.log('Promise: The result is: ', error);
});