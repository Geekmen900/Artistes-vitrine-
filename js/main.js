let nom = ""
let age = 0
let test = false
let sexe = ""

nom = prompt("Saisir votre nom")
sexe = prompt("Votre sexe (M ou F)")

if(sexe === "M") {
    alert(`👋🏾Salut ! monsieur ${nom} . Bienvenue sur mon site vitrine.🤓`)
} else {
    alert(`👋🏾Salut ! Mme ${nom} . Bienvenue sur mon site vitrine.🤓`)
}