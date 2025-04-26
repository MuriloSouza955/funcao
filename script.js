/*
Escopo de Função
Neste vídeo, expliquei sobre o comportamento de Hosting das funções em JavaScript. Mostrei como é possível utilizar uma função antes mesmo de declará-la, devido ao fato de que as funções são içadas para o topo. Também demonstrei como é possível criar funções dentro de funções e como o escopo influencia na execução das mesmas. É importante entender esses conceitos para evitar erros ao trabalhar com funções em JavaScript.



*/

showMessage("Olá, Murilo! antes da função declarada");


//exemplo de hoisting, onde a função é declarada depois de ser chamada
function showMessage(message){
    console.log(message);
    endline()

    function endline(){
        console.log("--------------------------------");
    }
}

showMessage("Olá, Murilo! após a função declarada");



//exemplo de função dentro de função
function sum(a, b){
    function sum(a, b){
        return a + b;
    }
    return sum(a, b);
}

console.log(sum(1, 2));
console.log(sum(10, 12));
console.log(sum(15, 23));

