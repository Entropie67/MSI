let specialites = {
    "NSI": 0,
    "Maths": 0,
    "Physique": 0,
    "HGGSP": 0,
    "HLP": 0,
    "CAS": 0,
    "SI": 0,
    "SVT": 0,
    "SES": 0
};

function evaluerResultats() {
    // Réinitialiser les scores
    for (let spe in specialites) {
        specialites[spe] = 0;
    }

    // Question 1
    let reponseProbleme = document.getElementById('probleme-resoudre').value;
    if (reponseProbleme === "oui") {
        specialites["NSI"] += 5;
        specialites["Maths"] += 5;
    } else {
        specialites["Maths"] -= 2;
        specialites["NSI"] -= 2;
    }

    // Question 2
    let scoreCoeur = parseInt(document.getElementById('apprendre-coeur').value, 10);
    specialites["HLP"] += scoreCoeur;
    specialites["HGGSP"] += scoreCoeur;




    // Afficher les résultats en bares
    let divResultats = document.getElementById('resultats');
    divResultats.innerHTML = '<h2>Tes résultats :</h2>';
    for (let spe in specialites) {
        let score = specialites[spe];
        let pourcentage = Math.min(Math.max(score, 0), 10) * 10; // Assurez-vous que le pourcentage est entre 0 et 100
        divResultats.innerHTML += `
            <div class="question">${spe}</div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${pourcentage}%">${score}</div>
            </div>`;
    }



    // Afficher les résultats normalement

    divResultats.innerHTML += '<h2>Tes résultats :</h2>';
    for (let spe in specialites) {
        divResultats.innerHTML += `<p>${spe}: ${specialites[spe]}</p>`;
    }
}

window.onload = function() {
    document.getElementById('apprendre-coeur').value = 0; // Initialiser le curseur
};
