// Shorthand in object creation
/** We can use shorthads to assign object properties in ES6 javascript */

const name = 'Sreejith'
const userAge = 25

const obj = {
    name,
    age: userAge,
}
console.log(obj);


/**Destructuring can be used to pick out only the necessary properties of an object */
const product = {
    name: 'Pencil',
    stock: 25,
    price: 5,
    rating: 4,
}
/**
 * 1. We can provide properties that are not there in the object- value will be set to undefined
 * 2. We can rename the properties - useful when the name is already used inside the scope
 * 3. We can provide default values - will be assigned only if the property is absent
 */
const {name: itemName, price, manufacture = 'Faber Castle'} = product
console.log(itemName);
console.log(price)
console.log(manufacture)

