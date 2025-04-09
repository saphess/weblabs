function regularExpression(str) {
    const re = /^[a ]+$/;
    return re.test(str) && str.replace(/ /g, '').length > 0;
}

const inputPattern = document.getElementById("inputFieldPattern");
const messagePattern = document.getElementById("messagePattern");

inputPattern.addEventListener("input", () => {
    if (inputPattern.validity.valid) {
        messagePattern.textContent = "✅ Хорошо";
        messagePattern.style.color = "green";
    } else {
        messagePattern.textContent = "❌ Не хорошо";
        messagePattern.style.color = "red";
    }
});

const inputPatternEmail = document.getElementById("inputFieldEmail");
const messagePatternEmail = document.getElementById("messageEmail");

inputPatternEmail.addEventListener("input", () => {
    if (inputPatternEmail.validity.valid) {
        messagePatternEmail.textContent = "✅ Хорошо";
        messagePatternEmail.style.color = "green";
    } else {
        messagePatternEmail.textContent = "❌ Не хорошо";
        messagePatternEmail.style.color = "red";
    }
});

const text = document.getElementById("text");
const searchWord = "функция"

const reSearch = new RegExp(searchWord, "gi");

text.innerHTML = text.innerHTML.replace(reSearch, "<mark>$&</mark>")

function countWordFrequency(text) {
    const words = text.toLowerCase().match(/[а-яёa-z0-9]+/gi);
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
}

const textContent = text.textContent;
const wordFrequency = countWordFrequency(textContent);

const wordFrequencyDiv = document.getElementById("wordFrequency");

let htmlContent = "<ul>";
for (let word in wordFrequency) {
    htmlContent += `<li>${word}: ${wordFrequency[word]}</li>`;
}
htmlContent += "</ul>";

wordFrequencyDiv.innerHTML = htmlContent;