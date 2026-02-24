const arraydata =["apple", "banana", "cherry", "date"];
for (let i = 0; i < arraydata.length; i++) {
    
    if (arraydata[i] === "cherry") {
        console.log("Found the cherry!");
        break;
    } 
    console.log(arraydata[i]);
}