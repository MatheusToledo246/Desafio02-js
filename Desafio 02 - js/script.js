//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello Word")

//2. 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 5
const numbertwo = 7
alert(numberOne+numbertwo)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for,
// exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const notNumber = '33'
if( typeof notNumber == 'number'){
    alert('É um número')
} else{
    alert('Não é um número')
}

//4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, 
//exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = 'hello word'
if(typeof isString == 'string'){
    alert('É uma string')
} else{
    alert('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true
if(typeof isBoolean == 'boolean'){
    alert('É um booleano')
} else{
    alert('Não é um booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

// const numberOne = 12
// const numbertwo = 6
// alert(numberOne-numbertwo)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
// const numberOne = 2
// const numbertwo = 52
// alert(numberOne*numbertwo)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
// const numberOne = 21
// const numbertwo = 7
// alert(numberOne/numbertwo)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isPar = 2
if(isPar % 2 == 0){
    alert('É um número par')
} else{
    alert('Não é um número par')
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isImpar = 3
if(isImpar % 2 != 0){
    alert('É um número impar')
} else{
    alert('Não é um número impar')
}