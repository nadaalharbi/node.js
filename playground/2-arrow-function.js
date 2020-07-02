// Alternative syntax of writing Functions(with arrow and without)
// Arrow-function dont bind this value
// 1-
const square = function (num) {
    return num * num;
}
// 2-
const squareArrow = (num) => {
    return num * num;
}
// 3-
const sequareShort = (num) => num * num;
// 4- even const has two properity a name, and a function
const event = {
    
    name: 'Birthady Party',
    guestList: ['Reem', 'Omar', 'Ivan'],
    printGuestList: function () {
        console.log('Guest List for ' + this.name)
        //to print each guest, function is called for each index
        this.guestList.forEach( (guest)=> {
            console.log(guest + ' is attending '+this.name);

        });
    },
    printGuestList2: () => {
        console.log('Guest List for ' + this.name);
    },
    printGuestList3: () => console.log('Guest List for ' + this.name)
    
    printGuestList4() {
        console.log('Guest List for ' + this.name);

    }

}
console.log(square(3));
console.log(squareArrow(3));
console.log(sequareShort(3));
event.printGuestList();
event.printGuestList2();// we can not have access to name's value because of arrow function
event.printGuestList3();// same as above.
event.printGuestList4();// since there's no arrow-func then we can acces name's value!