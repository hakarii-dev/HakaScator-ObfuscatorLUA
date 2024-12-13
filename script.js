function obfuscateLua() {
    const luaCode = document.getElementById("luaCode").value;
    // Simulasi proses obfuscate (gunakan library nyata di sini)
    const obfuscatedCode = luaCode.split("").reverse().join(""); // Ini hanya contoh dasar

    document.getElementById("obfuscatedCode").value = obfuscatedCode;
}
