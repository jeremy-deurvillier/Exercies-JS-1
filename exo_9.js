/* ** Affiche la table de multiplication du nombre passé en paramètre.
* 
* @param Int number Un nombre entier, dont on veut afficher la table de multiplication.
*
* @return String Une table de multiplication.
* */
function tableOf(number) {
    let table = ``;

    for (let item = 0; item <= 10; item ++) {
        table += `${number} x ${item} = ${number * item}\n`;
    }

    return table;
}

// Envoi du formulaire
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let number = parseInt(document.querySelector('#number').value, 10);

    alert(tableOf(number));
});
