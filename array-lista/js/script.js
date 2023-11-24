// 1.  CREARE ARRAY LA FRUTTA PRESENTE IN FRIGO
const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ]
// 2. CREARE E AGGIUNGE PESCA ALL'ARRAY FRUITS
let peach = 'pesca'
let flag=0;
fruits.push(peach)
// 3. VERIFICARE SE COCOMERO E' PRESENTE NEL FRIGO E STAMPARE ESITO
for(let i=0; i<fruits.length;i++){
    if(fruits[i] == 'cocomero'){
        console.log("Trovato! Devo solo preparare il cocktail.")
        flag=1;
    }
}
if(!flag){
    console.log("Oh no, devo uscire a comprare il cocomero!")
}

