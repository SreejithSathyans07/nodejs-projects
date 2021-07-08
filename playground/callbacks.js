const getNames = (id, callback) =>{
    setTimeout(() => {
        data = { 'id' : '101', 'name':'sreejith'}
        callback(data)
    }, 2000);
}

// getNames(101, (data)=>{
//     console.log(data)
// });


const add = (num1, num2, callback3)=>{
    setTimeout(() => {
        callback3(num1+num2)
    }, 2000);
}

add(1,4, (sum)=>{
    console.log(sum)
})