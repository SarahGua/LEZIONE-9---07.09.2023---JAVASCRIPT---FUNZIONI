/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = function(n1, n2){
    return n1 * n2
}

console.log('area del rettangolo è ', area(2, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function(num1, num2){
    if(num1 === num2){
        return ((num1 + num2)*3)
    } else {
        return (num1 + num2)}
}

console.log(crazySum(2, 2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function(par1, par2=19){
    if(par1 > 19){
      return ((par1 - par2)*3)  
    } else {
       return (par1 - par2) 
    }
}  

console.log(crazyDiff(18))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function(n){
    if(n >= 20 && n <= 100 || n === 400){
        return 'true'
    } else {
        return 'false'
    }
}

console.log(boundary(150))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function(n){
    if(n % 3 === 0 || n % 7 === 0){
        return 'true'
    } else {
        return 'false'
    }
}

console.log(check3and7(25))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function(epi){
    return epi.split('').reverse().join('')
}
console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}

console.log(upperFirst('ciao mi chiamo sarah'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function(parameter){
    return parameter.split('') 
}

console.log(giveMeRandom(Math.floor(Math.random()*10)))