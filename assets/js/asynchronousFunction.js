const add = async (a, b) => {
    return a + b;
};

console.log("Calling add function");
const result = add(10,20).then( (data) => {
    console.log(data);
    return data;
})
console.log("Printing result of add function call,",result);