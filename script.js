const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const text = input1.value.trim();
    const langFrom = select1.value;
    const langTo = select2.value;

    if (text === "") {
        alert("Введите текст для перевода.");
        return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langFrom}|${langTo}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translated = data.responseData.translatedText;
            input2.value = translated;
        })
});
