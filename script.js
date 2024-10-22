
// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {

// TODO: Implement the password generation logic based on user input
const generatePassword = (length, options) => {

    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet = '';
    if (options.includeUppercase) characterSet += uppercase;
    if (options.includeLowercase) characterSet += lowercase;
    if (options.includeNumbers) characterSet += numbers;
    if (options.includeSpecialChars) characterSet += specialChars;

    if (characterSet === '') {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};
    let characters = '';
    if (options.includeUppercase) characters += uppercase;
    if (options.includeLowercase) characters += lowercase;
    if (options.includeNumbers) characters += numbers;
    if (options.includeSpecialChars) characters += specialChars;

    // TODO: Create a variable for the character set based on selected options
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

 // TODO: Generate the password based on the selected criteria
    return password;
};