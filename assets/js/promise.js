const greaterThan20 = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a + b > 20) {
      resolve(true);
    }
    reject(false);
  });
};

greaterThan20(20,0).then(res => {
    console.log("Addition is greater than 20:",res);
}).catch(err => {
    console.log("Addition is greater than 20:",err);
})