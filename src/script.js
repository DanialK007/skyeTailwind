//print out in console
console.log("Hello")

//print out in web page
document.write("HELLO WORLD!")

//get element col1
//variable (let, var, const)
{
    var col1 = document.getElementById("col1")
    console.log(col1)


    let col2 = document.getElementById("col2")
    const width = "500px"
    const width = "200px" //can't declare again 
}

console.log(col2)

// body.innerText = "HAHA"

col1.innerText = "this is column 1"