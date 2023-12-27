let EmailBoxInput = document.querySelector("#EmailBoxInput");
let CheckBtn = document.querySelector(".Btn");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function checkEmailFun() {
    if (EmailBoxInput.value.match(emailRegex)) {
        EmailBoxInput.style.borderBottom = "3px solid green"
        CheckBtn.style.backgroundColor = "green";
        alert("You have enterd a Valid email !");
        EmailBoxInput.value = "";
        return true;
    }

    else {
        EmailBoxInput.value = ""
        EmailBoxInput.style.borderBottom = "3px solid red";
        CheckBtn.style.backgroundColor = "red";
        alert("You have enterd a invalid email !");
        return false;
    }
}

CheckBtn.addEventListener("click", checkEmailFun)