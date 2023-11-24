// 1.CHIEDERE ALL'UTENTE QUANTI ELEMENTI DOVRA' CONTENERE L'ARRAY
const array = []
let arrElements = parseInt(prompt('Quanti elementi deve contenere l\'array?'))
// 2. CREARE CICLO PER RIEMPIRE L'ARRAY 
for(let i=0; i<arrElements; i++){
    // 3. RIEMPIRE GLI ELEMENTI DELL'ARRAY CON UN NUMERO RANDOM DA 1 A 100
    array.push(Math.floor(Math.random() * 100)+ 1)
}
if(arrElements >= 5){
    const array2 = array.slice(arrElements - 5)
    console.log(array2)
}else{
    alert('Gli elementi presenti sono minori di 5')
    console.log(array)
}