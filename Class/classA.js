const classB= require('./classB');
class ClassA{
    functionA(){
        console.log("Printing from class A function A");
        const objectB=new classB();
        objectB.functionB();
    }
}
const objectA=new classA();
objectA.functionA();