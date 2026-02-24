function fibonacci(n) {
    let  numberOne= 0, numberTwo= 1, nextNumber;
    console.log(`Number one is :${numberOne}, Number two is :${numberTwo}`);
    for (i=2; i<=n; i++) {
        nextNumber=numberOne+numberTwo;
        console.log(`Next Number is : ${nextNumber}`);
        numberOne=numberTwo;
        numberTwo = nextNumber;
    }
}
fibonacci(3);