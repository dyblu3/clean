function cleanText() {
    const inputText = document.getElementById("inputText").value;
    const cleanedText = inputText.split('\n').map(line => line.trim().replace(/\s+/g, ' ')).join('\n');
    document.getElementById("cleanedText").value = cleanedText;
    animateButton("cleanTextBtn");
}

function copyToClipboard() {
    const cleanedText = document.getElementById("cleanedText").value;
    navigator.clipboard.writeText(cleanedText).then(() => {
        showNotification();
        setTimeout(hideNotification, 2000);
    }).catch(err => console.error("Failed to copy:", err));
    animateButton("copyToClipboardBtn");
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("cleanedText").value = "";
    animateButton("clearTextBtn");
}

function animateButton(btnId) {
    const button = document.getElementById(btnId);
    button.style.transform = "scale(1.2)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 300);
}

function showNotification() {
    const notification = document.getElementById("copyNotification");
    notification.style.display = "block";
}

function hideNotification() {
    const notification = document.getElementById("copyNotification");
    notification.style.display = "none";
}