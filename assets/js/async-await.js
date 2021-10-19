async function addition(a,b) {
    return a+b;
}

async function checkAddition(a,b) {
    const result = await addition(a,b)
    console.log(`Addition of ${a} and ${b} is:`,result);
}

checkAddition(50,80);