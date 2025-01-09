const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const errorMsg = document.getElementById('errorMessage');


function validateInputs() {
    const value1 = parseInt(input1.value, 10) || 0;
    const value2 = parseInt(input2.value, 10) || 0;

    if (value1 > value2) {
        errorMsg.textContent = "First Number is Larger";
        errorMsg.style.display = "block";
    }
    else if (value1 < value2) {
        errorMsg.textContent = "Second Number is Larger";
        errorMsg.style.display = "block";
    }
    else {
        errorMsg.style.display = "none"
    }
}

input1.addEventListener('input', validateInputs);
input2.addEventListener('input', validateInputs);