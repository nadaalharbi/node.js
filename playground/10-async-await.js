const add = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num2 < 0 || num2 <0){
            return reject('Number must NOT be Neg.');
        }
        resolve(num1+num2);
        }, 2000);
    });
}

const doWorkAsync = async () => {
    const sum = await add(1,99);
    const sum2= await add(sum, 40);
    const sum3 = await add(sum2,25);
 return sum3
};

doWorkAsync().then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
});