console.log(document.querySelector('form'));

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let n = parseInt(document.querySelector('#number').value);

    if (n < 5) alert('Le nombre saisi est inférieur à 5');
    if (n === 5) alert('Le nombre saisi est égal à 5');
    if (n > 5) alert('Le nombre saisi est supérieur à 5');
});
