function clearScreen(){
    document.getElementById("result").value=" ";
    console.log("clearScreen func call");
}

function slice(){
    var display = document.getElementById("result");
    display.value =display.value.slice(0,-1);
    console.log("slice func call")
}

function addToDisplay(value){
    document.getElementById("result").value+=value;
    console.log("addToDisplay fun call",value)
}

function calculate(){
    var getResult = document.getElementById("result").value;
    try {
        var evalResult = eval(getResult);
        if (isNaN(evalResult)) {
            throw new Error("Invalid input or expression");
        }
        document.getElementById("result").value = evalResult;
    } catch (error) {
        alert("Error: " + error.message);
    }
}

function toggleColorMode() {
    document.querySelector('.calculator').classList.toggle('change-mode');
    document.querySelector('.container').classList.toggle('change-mode');
}