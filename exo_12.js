/* ** Calcule le carré d'un nombre.
* 
* @param Int n UN nombre entier.
*
* @return Int Le carré du nombre en paramètre.
* */
function square(n) {
    return n**2;
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let n = parseInt(document.querySelector('#number').value);

    alert(`Le carré de ${n} est ${square(n)}`);
});
