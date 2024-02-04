// 1.Function Definition:
// "Purpose: This function takes a character as input (char) and returns its ski code as a numeric value."
// char.charCodeAt(0): this method accesses the Unicode code point(numeric representation)

function getAsciiCode(char) {
    return char.charCodeAt(0);
}

// 2. Purpose: This function retrieves the character entered in an input field with ID charInput, calls the function getAsciiCode to get its ASCII code, and then displays the result in an element with ID asciiResult.

function showAsciiCode() {
    const charInput = document.getElementById('charInput').value;
    const asciiCode = getAsciiCode(charInput);

    const resultElement = document.getElementById('asciiResult');
    if (!isNaN(asciiCode)) {
        resultElement.textContent = `code ascii: ${asciiCode}`;
    } else {
        resultElement.textContent = '';
    }
}