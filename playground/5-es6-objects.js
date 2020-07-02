const name = 'Nada';
const age = 23;
const myMajor = 'CS';

const user = {
    name,//if same name letter it's OK to write it once
    age,
    major: myMajor// diff. name so u need to write it this way(Key:Value)
}
console.log('User inofrmation', user);


//Object Destructuring :- 
const product = {
    label: 'black notebook',
    price: 5,
    stock: 200,
    salePrice: undefined
}
/*
const label = product.label
const price = product.price
 
OR:
*/
const { label: productLabel, price } = product;

console.log(productLabel);
console.log(price);

//Another usage of Destruction when passing object to func
const transaction = (order, { label, price }) => {
    console.log(`Order number is: ${order} \nLabel: ${label} \nPrice: ${price} $`)
}

transaction('order2', product);