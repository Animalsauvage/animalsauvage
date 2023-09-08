// Code JavaScript pour observer la section et ajouter la classe à body
const sectionGalerie = document.getElementById("galerie");
const pourcentageEntree = 22; // Pourcentage d'entrée dans le viewport

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= pourcentageEntree / 100) {
            document.body.classList.add("actif");
        }
    });
}, {
    threshold: [pourcentageEntree / 100], // Définir le seuil d'intersection
});

observer.observe(sectionGalerie);


function m_sfcon(u) {
    pre = "mail";
    url = pre + "to:" + u;
    document.location.href = url + "@animalsauvage.fr";
}
