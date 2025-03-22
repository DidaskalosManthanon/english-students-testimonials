const testimonials = [
    {
        name: "Benjamin",
        photo: "./pics/benjamin.webp",
        text: `<strong>Parfait !</strong>
        Je parlais anglais presque couramment il y a quelques années mais le manque de pratique m'a rouillé. Après déjà quelques cours avec Laurent je me sens gagner en autonomie. Nous avons des discussions sur toutes sortes de sujets ce qui me permet de m'exprimer sur des choses concrètes ainsi que sur l'actualité. Reste à réactiver le vocabulaire oublié et continuer à pratiquer régulièrement. C'est un professeur très sympa, je recommande ! :)`
    },
    {
        name: "Cécile",
        photo: "./pics/cecile.webp",
        text: `<strong>Excellent !</strong>
        Victor a apprécié le cour et prend conscience de sa capacité à apprendre une langue.`
    },
    {
        name: "Diane",
        photo: "./pics/diane.webp",
        text:  `Très bon prof, met à l’aise et a de bonnes méthodes d’apprentissage.`
    },
    {
        name: "Flavie",
        photo: "./pics/flavie.webp",
        text:  `<strong>Parfait !</strong>
        Les cours sont top et parfaitement adaptés à mes besoins. Laurent est passionné donc passionnant, éveille la curiosité sur un grand nombre de sujets et permet d'aborder l'anglais sous un autre aspect, ludique.`
    },
    {
        name: "gilles",
        photo: "./pics/gilles.webp",
        text:  `<strong>Bien !</strong> pour me faire progressé en conversation en anglais, çà ira très bien.`
    },
    {
        name: "hugo",
        photo: "./pics/hugo.webp",
        text:  `Laurent est confiant et passioné. Ses cours sont dynamique et interressant. On progresse très vite grâce à lui, je ne peux que vous le recommander.`
    },
    {
        name: "Julien",
        photo: "./pics/julien-crypto.webp",
        text:  `Avec Laurent vous pourrez apprendre l'anglais en conversant naturellement et donc en enrichissant votre vocabulaire à travers des books en anglais, ou bien des sujets d'actualités que vous souhaitez developper.`
    },
    {
        name: "Julien",
        photo: "./pics/julien-dev.webp",
        text:  `<strong>Parfait !</strong> Super!
Laurent à l'écoute et n'hésite pas à créer une discussion basée sur un contexte professionnel familier.`
    },
    {
        name: "Louise",
        photo: "./pics/louise.webp",
        text:  `<strong>Parfait !</strong> 
        Pédagogue`
    },
    {
        name: "marie",
        photo: "./pics/marie.webp",
        text:  `<strong>Parfait !</strong> Le premier cours était vraiment bien . Laurent prend le temps de connait son élève et comprendre les besoins. Je recommande.`
    },
    {
        name: "Mariya",
        photo: "./pics/mariya.webp",
        text:  `Laurent a une bonne approche pedagogique, avec un reel background des competences linguistiques.

Sa methode est rigoureuse, simple et Efficace.

Je recommande volontier ce professeur.`
    },
    {
        name: "martine",
        photo: "./pics/martine.webp",
        text:  `<strong>Parfait !</strong> 
        Je me prononcerai après quelques cours mais pour moi je le trouve très très bien.`
    },
    {
        name: "Marie",
        photo: "./pics/mom-marie.webp",
        text:  `<strong>Excellent !</strong> 
        Mon fils est satisfait`
    },
    {
        name: "Morgane",
        photo: "./pics/morgane.webp",
        text:  `<strong>Excellent !</strong> 
        J'ai eu besoin de cours d'anglais très rapidement, et deux fois par jour sur 15 jours pour pouvoir passer des oraux en anglais pour intégrer une école de commerce en Master. Laurent a su se rendre très disponible et s'adapter à mon niveau et mon accent très frenchi ! Merci encore à lui car sans ses cours je n'aurais jamais eu un 15/20 lors de mon oral de sélection !!`
    },
    {
        name: "Naomi",
        photo: "./pics/naomi.webp",
        text:  `<strong>Parfait !</strong> 
        Laurent est très à l'écoute, sympathique et pédagogue ! Super prof :)`
    },
    {
        name: "Nicolas",
        photo: "./pics/nicolas.webp",
        text:  `<strong>Parfait !</strong> 
        Laurent exploite parfaitement les différents volets d'apprentissage d'une langue. Sa maîtrise des outils numériques est un vrai plus dans le cadre des cours. Les sujets de discussion sont riches et variés.`
    },
    {
        name: "Romain",
        photo: "./pics/romain.webp",
        text:  `Laurent est un professeur cultivé, à l'écoute de ses élèves et de leurs attentes.`
    },
    {
        name: "Thomas",
        photo: "./pics/thomas.webp",
        text:  `Très bon relationnel et très bon pédagogue. Bcp d'exemples liés à ses expériences. Très sympa.`
    },
    {
        name: "Valérian",
        photo: "./pics/valerian.webp",
        text:  `<strong>Parfait !</strong> Laurent est un très bon professeur d’anglais, il s’adapte au niveau de chacun. Les cours sont très intéressent et les exercices pratiqués permettent de bien progresser. Depuis que je prends des cours, je me suis amélioré en participation à l’oral. C’est pourquoi je le recommande fortement.`
    }
]


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
    imgEl.src = photo;
    textEl.innerHTML = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}