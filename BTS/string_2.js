// - 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.


const tableauTest = [45, 45453234646, 1, 9]

// fonction
const BiggestNumber = findTheBiggestNumber(tableauTest)
function findTheBiggestNumber(tableauTest) {
    let BiggestNumber = tableauTest[0]
    for (let i = 1; i < tableauTest.length; i++) {
      if (tableauTest[i] > BiggestNumber) {
        BiggestNumber = tableauTest[i]
      }
    }
   
// instructions
 return BiggestNumber
    }

// retourne le plus grand nombre du tableau
console.log(BiggestNumber)
