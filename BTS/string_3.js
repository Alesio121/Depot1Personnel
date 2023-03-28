// - 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont 
// toutes les voyelles ont été supprimées.

const chain = 'Lucas et Alessio';
 const result = supprVoyelle(chain);
 function supprVoyelle(chain) { /* creation de la fonction pour suprimer les voyelles */
    const voyelle = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];
    let result = '';
    for (let i = 0; i < chain.length; i++) { /* dire que i = a la premier lettre de la chaine et de continuer pour toute les lettres de la chaine jusqu a la dernierre lettre */
      if (!voyelle.includes(chain[i])) { /* si */
        result += chain[i];
      }
    }
    return result;
  }

  console.log(result);


  //
  // const withoutVowels = (charStr) => {
  //  const vowels = ['a','e','i','o','u','y']
  // let transformedStr = charStr 
  //
  //}
  //
