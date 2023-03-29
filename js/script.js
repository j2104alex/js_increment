function sumOne() {
    let result = document.getElementById("result_html").innerHTML
    let numberResult = Number(result);
    numberResult++;
    document.getElementById("result_html").innerHTML = numberResult
}

function sumTwo() {
    let result = document.getElementById("result_html").innerHTML
    let numberResult = Number(result);
    numberResult = numberResult + 2;
    document.getElementById("result_html").innerHTML = numberResult
}

function sumFive() {
    let result = document.getElementById("result_html").innerHTML
    let numberResult = Number(result);
    numberResult = numberResult + 5;
    document.getElementById("result_html").innerHTML = numberResult
}

function subOne() {
    let result = document.getElementById("result_html").innerHTML
    let numberResult = Number(result);
    numberResult = numberResult - 1;
    document.getElementById("result_html").innerHTML = numberResult
}

function subTwo() {
    let result = document.getElementById("result_html").innerHTML
    let numberResult = Number(result);
    numberResult = numberResult - 2;
    document.getElementById("result_html").innerHTML = numberResult
}

function subFive() {
    let result = document.getElementById("result_html").innerHTML
    let numberResult = Number(result);
    numberResult = numberResult - 5;
    document.getElementById("result_html").innerHTML = numberResult
}