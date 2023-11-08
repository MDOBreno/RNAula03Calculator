
// Faca testes em JS salvando esse arquivo e depois:     Control+Alt+'N'   , e o resultado é exibido na SAIDA , Graças a extensão do VC Code chamada de "Code runner"

// A dupla negação faz uma variável voltar ao seu valor 'original' 
console.log(!!''); //String vazia: false
console.log(!!' '); //String nao vazia: true
console.log(!!0); //Numero zero: false
console.log(!!-1); //Numero nao zero: true


const values = [23, 2];
console.log(values);
const operation = '+';
console.log(operation);
console.log(eval(`${values[0]} ${operation} ${values[1]}`));
const operation2 = '=';
console.log(eval(`${values[0]} ${operation2} ${values[1]}`));


