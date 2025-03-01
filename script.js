let qrBox = document.getElementById("qr-code-box");
let imgBox = document.getElementById("qr-code-img");
let userInput = document.getElementById("qr-code-input");

function generateQrCode() {
    if (userInput.value.length > 0) {
        imgBox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(encodeURIComponent(userInput.value));
        qrBox.classList.add("show-img");
    }
    else {
        userInput.classList.add("error");
        setTimeout(() => {
            userInput.classList.remove("error");
        }, 1000);
    }

} 