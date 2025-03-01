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

async function copyToClipboard() {
    if (navigator.clipboard && window.isSecureContext) {
        const response = await fetch(imgBox.src)
        const blob = await response.blob();
        const clipboardItem = new ClipboardItem({ [blob.type]: blob });
        return navigator.clipboard.write([clipboardItem]).then(() => {
            alert("QR Code Copied To ClipBoard Sucessfully");
        }).catch(error => {
            console.log("Error Copying the QR-Code to the Clipboard", error);
        });
    }
}

async function download() {
    try {
        const response = await fetch(imgBox.src)
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = userInput.value + '-QrCode-DownloadedImage.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        console.error("Error Downloading the QR-Code Image", error);
    }

} 