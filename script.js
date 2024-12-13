function obfuscateLua() {
    const luaCode = document.getElementById("luaCode").value;
    if (!luaCode.trim()) {
        alert("Please paste your Lua code to obfuscate.");
        return;
    }

    // Example simple obfuscation (reverse code logic)
    const obfuscatedCode = luaCode.split("").reverse().join("");

    document.getElementById("obfuscatedCode").value = obfuscatedCode;
}
