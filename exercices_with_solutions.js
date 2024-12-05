
/*
===========================================
        EXERCICES JAVASCRIPT
===========================================

### ENONCE ###
Dans ce fichier, vous allez trouver plusieurs exercices pratiques pour consolider vos connaissances en JavaScript. Ces exercices couvrent divers concepts tels que les boucles, les littéraux de template, la gestion d'input, les promesses, l'utilisation des APIs tierces, le stockage local et les paramètres d'URL.

### LIVRABLE ###
1. Complétez chaque fonction ou script là où le commentaire `// Votre code ici` est mentionné.
2. Testez chaque fonctionnalité en exécutant ce fichier dans votre environnement ou votre navigateur.
3. Les solutions sont fournies à la fin du fichier.

### EXERCICES ###
*/

// **1. Les Boucles et Conditions**
// Écrivez une fonction `findEvenNumbers` qui prend un tableau de nombres en entrée et retourne un tableau contenant uniquement les nombres pairs.

function findEvenNumbers(numbers) {
    // Votre code ici
}
console.log(findEvenNumbers([1, 2, 3, 4, 5])); // Exemple de test attendu : [2, 4]

// **2. Utilisation des littéraux template**
// Créez une fonction `formatGreeting` qui prend un prénom et un âge, et retourne une chaîne de bienvenue formatée.

function formatGreeting(name, age) {
    // Votre code ici
}
console.log(formatGreeting("Alice", 25)); // Exemple de test attendu : "Bonjour Alice, vous avez 25 ans !"

// **3. Récupérer et valider les valeurs d’un input ou d’un formulaire**
// Validez qu'une adresse e-mail saisie contient un "@" lorsque l'utilisateur clique sur un bouton.

document.getElementById('validate')?.addEventListener('click', function () {
    // Votre code ici
});

// **4. Promesses et fonctions asynchrones**
// Écrivez une fonction `waitAndGreet` qui prend un nom, attend 2 secondes, et retourne un message de bienvenue.

async function waitAndGreet(name) {
    // Votre code ici
}
waitAndGreet("Bob").then(console.log); // Exemple de test attendu : "Bonjour Bob !" après 2 secondes

// **5. Utilisation d’un API tierce avec Fetch**
// Affichez les titres des articles d'une API publique : https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        // Votre code ici
    })
    .catch(error => console.error("Erreur :", error));

// **6. Stockage web avec localStorage**
// Sauvegardez le nom d'un utilisateur dans `localStorage`, puis affichez-le automatiquement après le chargement de la page.

document.getElementById('save')?.addEventListener('click', function () {
    // Votre code ici
});
function displayWelcomeMessage() {
    // Votre code ici
}
displayWelcomeMessage();

// **7. Manipuler les paramètres d’URL avec URLSearchParams**
// Récupérez les paramètres `name` et `age` d'une URL et affichez-les dans la console.

const params = new URLSearchParams(window.location.search);
const name = params.get('name'); // Exemple : Alice
const age = params.get('age'); // Exemple : 25
console.log(`Nom : ${name}, Âge : ${age}`);

/*
===========================================
        SOLUTIONS
===========================================
*/

// Solution de l'exercice 1
function findEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5])); // Affiche [2, 4]

// Solution de l'exercice 2
function formatGreeting(name, age) {
    return `Bonjour ${name}, vous avez ${age} ans !`;
}
console.log(formatGreeting("Alice", 25)); // Affiche : "Bonjour Alice, vous avez 25 ans !"

// Solution de l'exercice 3
document.getElementById('validate')?.addEventListener('click', function () {
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message');
    if (email?.includes('@')) {
        message.textContent = "L'adresse e-mail est valide.";
        message.style.color = "green";
    } else {
        message.textContent = "Veuillez entrer une adresse e-mail valide.";
        message.style.color = "red";
    }
});

// Solution de l'exercice 4
async function waitAndGreet(name) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `Bonjour ${name} !`;
}
waitAndGreet("Bob").then(console.log); // Affiche : "Bonjour Bob !" après 2 secondes

// Solution de l'exercice 5
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => console.log(post.title));
    })
    .catch(error => console.error("Erreur :", error));

// Solution de l'exercice 6
document.getElementById('save')?.addEventListener('click', function () {
    const name = document.getElementById('name')?.value;
    localStorage.setItem('userName', name);
    displayWelcomeMessage();
});

function displayWelcomeMessage() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('welcome')?.textContent = `Bienvenue, ${savedName} !`;
    }
}
displayWelcomeMessage();

// Solution de l'exercice 7
const paramsSolution = new URLSearchParams(window.location.search);
const nameSolution = paramsSolution.get('name');
const ageSolution = paramsSolution.get('age');
console.log(`Nom : ${nameSolution}, Âge : ${ageSolution}`);
