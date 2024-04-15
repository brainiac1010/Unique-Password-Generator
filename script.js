const passwordBox = document.getElementById("password");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*(_+{}[-=/.,~|?])";
const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
    const length = 8; // If need to change the   pass vallu ic can change it from hear 
    const password = createPassword(length);
    passwordBox.value = password;
    passwordBox.select();
    document.execCommand("copy");
}

function createPassword(length) {
    let password = '';
    const characters = [upperCase, lowerCase, number, symbol];

    characters.forEach(charSet => {
        password += charSet[Math.floor(Math.random() * charSet.length)];
    });

    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    return password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}