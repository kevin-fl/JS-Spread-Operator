// SPREAD OPERATORS


function somme (a , b ,c) {
    return a + b + c ;
}

const nombres = [1,2,3];

somme(nombres);

console.log(somme(...nombres));     //-> 6
console.log(...nombres);           //-> 1,2,3
console.log(1,2,3);                //-> 1,2,3


// exemples 

const articulations = ["epaules", "genoux"];
const corps = ["tete", ...articulations, "bras", "pied"];
// ["tetes","epaules","genoux","bras","pied"]

console.log(articulations);
console.log(corps);


//autre exemple copie tableau avec spread operators

let arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(4);

console.log(arr);
console.log(arr2);




// utilisation de l operateur SPREAD pr faire une copie d un objet simple


const user = {
    nom: "f",
    prenom:"k",
    age: 29,
};

console.log(user);

const userCopie = {
    ...user,
};
console.log(userCopie);

userCopie.taille = 1.73;
console.log(userCopie);     //-> a rajouter la taille

console.log(user);         //-> tableau original sans la taille .


// Decomposition 

let profil = {prenom: 'sarah' , profilComplet: false};
let profilMisAJour = {nom: 'DUPONT' , profilComplet: true};

let clone = { ...profil };
// Object { prenom: 'sarah', profilComplet: false}

let fusion = {...profil, ...profilMisAJour};
//Object { nom: 'sarah', nom: 'Dupont', profilComplet: true};




//NB : il n est pas possible de remplacer ou recopier le comportement de la fonction Object.assign() : 



// utilisation de l operateur SPREAD copier un objet simple 

const utilisateur = {
    nom: "DOE",
    prenom: "JOHN",
    age: 25,
};

console.log(utilisateur);


/*
const utilisateurCopie = utilisateur;
*/

/*
console.log(utilisateurCopie);
utilisateurCopie.taille = 1.81;
console.log(utilisateurCopie);
console.log(utilisateur);
*/


const utilisateurCopie = {
    ...utilisateur,
};

console.log(utilisateurCopie);

utilisateurCopie.taille = 1.81;
console.log(utilisateurCopie);

console.log(utilisateur);



// L OPERATEUR SPREAD PR FAIRE une fusion de deux objets simples 

const information = {
    nom: "jacques",
    prenom: "john",
    age:27,
};

const origin = {
    ville: "New York",
    pays: "USA",
};

console.log(information);
console.log(origin);

const infoComplete = {
    ...information,
    ...origin,
};

console.log(infoComplete);




