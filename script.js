// Show selected file name
document.getElementById("fileInput").addEventListener("change", function () {
    const fileName = this.files[0] ? this.files[0].name : "No File Chosen";
    document.getElementById("fileName").textContent = fileName;
});

// Obfuscation function
function obfuscate() {
    const fileInput = document.getElementById("fileInput");
    const encryptKey = document.getElementById("encryptKey").value;

    if (!fileInput.files.length) {
        alert("Please select a Lua or text file to obfuscate.");
        return;
    }

    if (!encryptKey.trim()) {
        alert("Please enter an encryption key.");
        return;
    }

    alert("File obfuscation is simulated. Implement your logic here.");
}
