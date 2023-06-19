document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let text = document.querySelector('#text').value;
    let text_split = text.split('');

    text_split.forEach((letter) => {
        console.log(letter);
    });
});
