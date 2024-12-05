
// **1. Les Boucles et Conditions**
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

// **2. Utilisation des littéraux template**
function formatGreeting(name, age) {
    return `Bonjour ${name}, vous avez ${age} ans !`;
}
console.log(formatGreeting("Alice", 25)); // Affiche : "Bonjour Alice, vous avez 25 ans !"

// **3. Récupérer et valider les valeurs d’un input ou d’un formulaire**
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

// **4. Promesses et fonctions asynchrones**
async function waitAndGreet(name) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `Bonjour ${name} !`;
}
waitAndGreet("Bob").then(console.log); // Affiche : "Bonjour Bob !" après 2 secondes

// **5. Utilisation d’un API tierce avec Fetch**
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => console.log(post.title));
    })
    .catch(error => console.error("Erreur :", error));

// **6. Stockage web avec localStorage**
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

// **7. Manipuler les paramètres d’URL avec URLSearchParams**
const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const age = params.get('age');
console.log(`Nom : ${name}, Âge : ${age}`);
