// 1. A Soma que Virou Texto (O Duplo Papel do +)
// Objetivo: Entender na prática a diferença entre somar números e concatenar textos.
// Crie uma variável const numero1 com o valor numérico 50 e uma const numero2 com o valor numérico 10.
// Crie uma const textoNumero com a string "10".
// Faça um console.log somando numero1 + numero2.
// Faça outro console.log somando numero1 + textoNumero.
// Anote no código (usando comentários //) por que os resultados foram tão diferentes.


const numero1 = 50;
const numero2 = 10;
const textoNumero = '10';
console.log(numero1+numero2)
console.log('Resultado da soma', numero1 + textoNumero)
// Resultado da soma 5010,, ficou assim porque o sistema apenas concatenou o numero com o texto, ele não consegue somar um numero com um texto.

// 2. O Problema do Carrinho de Compras (== vs ===)
// Objetivo: Mostrar por que usar === é mais seguro e previsível no JavaScript.
// Declare uma variável do tipo numérico quantidade com o valor 3.
// Declare uma variável do tipo string quantidadeDigitada com o valor "3".
// Use o console.log para testar quantidade == quantidadeDigitada e veja o resultado.
// Na linha de baixo, use o console.log para testar quantidade === quantidadeDigitada.
// Crie uma terceira comparação verificando se eles são estritamente diferentes (!==) e exiba o resultado.

let quantidade = 3;
let quantidadeDigitada = 3;
console.log( quantidade == quantidadeDigitada)
console.log(quantidade === quantidadeDigitada)
console.log(quantidade !== quantidadeDigitada)


// 3. Par ou Ímpar? (O Operador de Resto %)
// Objetivo: Utilizar o operador de módulo/resto da divisão, muito usado para criar listas zebradas em telas.
// Crie uma const numeroParaTestar com qualquer número inteiro.
// Descubra o resto da divisão desse número por 2 e salve o resultado em uma variável chamada resto.
// Faça um console.log verificando se o resto === 0. (Se for verdadeiro, significa que o número é par).

const numeroParaTestar = 542;

const resto = numeroParaTestar % 2;
console.log(resto === 0, ' é Par')
console.log(resto !== 0, 'é Impar')

// 4. Sistema de Lotação (< e >=)
// Objetivo: Usar comparações numéricas para determinar limites.
// Crie uma variável const capacidadeMaxima de um evento com o valor 500.
// Crie um let ingressosVendidos com o valor 499.
// Faça um console.log verificando se os ingressos vendidos são menores que a capacidade.
// Mude o valor de ingressosVendidos (usando = de atribuição) para 500 e teste no console se o valor é maior ou igual à capacidade máxima.

const capacidadeMaxima = 500;
let ingressosVendidos = 499;
console.log(capacidadeMaxima == ingressosVendidos)
ingressosVendidos = 500;
console.log(capacidadeMaxima == ingressosVendidos)


// 5. Autorização de Acesso (Junção E &&)
// Objetivo: Verificar se múltiplas condições são verdadeiras ao mesmo tempo.
// Crie uma const idadeUsuario e atribua uma idade.
// Crie uma const temCNH com o valor true (booleano).
// Um usuário só pode alugar um carro se for maior ou igual a 18 anos E tiver CNH.
// Faça um console.log contendo a expressão de comparação completa usando && e veja se o resultado final é true ou false.

const idadeUsuario = 532;
const temCNH = true;
console.log(532 > 18 && 18 < 532);


// 6. Promoção da Loja (Junção OU ||)
// Objetivo: Liberar uma ação se pelo menos uma das condições for verdadeira.
// Crie uma const valorDaCompra com o valor de 150.
// Crie uma const isClienteVIP com o valor false.
// A regra da loja é: o frete é grátis se a compra for maior que 200 OU se o usuário for um cliente VIP.
// Use o console.log com o operador || para descobrir se este cliente específico terá frete grátis (true ou false).

const valorDaCompra = 150;
const isClienteVIP = false;
console.log(valorDaCompra > 200 || isClienteVIP  )



// 7. O Verificador de Férias (&& e ===)
// Objetivo: Combinar diferentes operadores lógicos e de igualdade.
// Crie uma const temDinheiroGuarda e atribua true ou false.
// Crie uma const mesAtual com a string "dezembro".
// Uma pessoa vai viajar se ela tiver dinheiro guardado E se o mês atual for estritamente igual a "dezembro".
// Imprima no console o resultado dessa verificação.

const temDinheiroGuarda = true;
const mesAtual = 'dezembro';
console.log(temDinheiroGuarda === mesAtual)




// 8. Painel de Administração (!= e !==)
// Objetivo: Entender testes de exclusão (quando queremos garantir que algo não é uma coisa específica).
// Crie uma const perfilUsuario com a string "visitante".
// Verifique usando o operador de diferença (!=) se o usuário é diferente de "admin".
// Agora, crie uma variável let acessoBloqueado e atribua a ela o valor numérico 0. Verifique se acessoBloqueado é estritamente diferente (!==) da string "0".

const perfilUsuario = "visitante";
console.log(perfilUsuario != "admin")
let acessoBloqueado = 0;
console.log(acessoBloqueado !== '0')




// 9. Atualização de Dados (A diferença entre = e ==)
// Objetivo: Corrigir uma confusão extremamente comum entre programadores iniciantes.
// Crie uma variável let statusPedido com o valor "pendente".
// Tente mudar o valor da variável para "enviado", mas de forma errada: digite statusPedido == "enviado".
// Dê um console.log(statusPedido) para mostrar à turma que o valor não mudou (porque == apenas compara, não salva nada).
// Na linha de baixo, faça o jeito certo usando = (atribuição) e imprima no console novamente para confirmar a mudança.

let statusPedido = "pendente";
statusPedido == "enviado";
console.log(statusPedido)
statusPedido = "enviado";
console.log(statusPedido)



// 10. O Grande Validador (Desafio Final de Lógica)
// Objetivo: Juntar operadores matemáticos, lógicos e relacionais em um único teste simulando a criação de uma conta.
// Crie as variáveis:
// const anoNascimento (ex: 2005)
// const email (uma string qualquer)
// const termosAceitos (booleano)
// Calcule a idade subtraindo o ano de nascimento do ano atual (usando o operador -).Verifique se a criação da conta é válida. Ela só será aprovada (true) se:
// A idade for maior ou igual (>=) a 18 E
// Os termos tiverem sido aceitos (=== true) E
// O email for diferente de vazio (!== "").
// Mostre o resultado final dessa grande verificação em um console.log!

const anoNascimento = 2005;
const email = 'fulano@outlook.com';
const termosAceitos = true;
idade = 2026 - anoNascimento;
console.log(idade >= 18 && termosAceitos === true, email !== "")

