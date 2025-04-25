/*
Argumentos e Parâmetros
Nesta aula, expliquei sobre parâmetros e argumentos em funções. Os parâmetros são variáveis que a função recebe, enquanto os argumentos são os valores passados para a função. Mostrei exemplos práticos, como uma função de mensagem e uma função de soma. Destaquei a importância da ordem dos parâmetros e como definir valores padrão para eles. Expliquei que a ordem dos parâmetros é crucial, mas é possível definir argumentos padrão. Esses conceitos são essenciais para tornar as funções mais dinâmicas.

*/

function message(userName){
    console.log("Olá "+userName+", é bom ter você aqui!" );
}

message("João");
message("Maria");
message("Pedro");

function sum(a, b){
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(10, 12));
console.log(sum(15, 23));

function joinText(text1="", text2="", text3=""){
    console.log(text1 + text2 + text3)
}

joinText("Murilo", " Souza!");
joinText("Murilo", " Souza", " é um programador!");
