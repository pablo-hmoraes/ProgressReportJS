# Fundamentos

Os exercícios do arquivo _fundamentos.js_ demonstram alguns conceitos básicos e funcionalidades iniciais de JavaScript que achei interessante.

#### 1. Operadores Booleanos 

No primeiro exercício, temos uma função que recebe como argumento uma string, que representa uma cor selecionado pelo usuário. Essa função irá imprimir a cor passado como argumento ou a cor _default_ 'purple' (caso não tenha sido passado nenhum argumento para a função). 
Esse resultado é obtido de forma elegante na seguinte linha de código:
``` javascript
    color = userColor || defaultColor;
``` 
Nesta linha, caso o valor de `userColor` seja do tipo _falsy_, o valor de `defaultColor` será atribuído a `color`.
Os valores _falsy_ em JavaScript são: 
- undefined
- null
- 0
- false
- ' ' (string vazia)
- NaN (Not a Number)

Qualquer valor que não seja _falsy_ é considerado _truthy_. 

#### 2. Controle de Fluxo

Os dois últimos exercícios tratam de conceitos de controle de fluxo, especificamente laços de repetição e condicionais. 
A primeira função recebe como argumento um array de inteiros chamado `array` e um número chamado `num`. A função retorna a soma de todos os números de `array` que são maiores que `num`.

Já a segunda função recebe um array de inteiros `array`. Ela irá imprimir o índice do número seguido de seu dobro, caso o número seja par, ou seguido da frase 'nothing' caso seja ímpar.

Em ambas as funções usei o condicional `if` e um laço de repetição. A diferença é que na primeira função não precisamos do índice dos elementos de `array`, apenas seus valores, por isso utilizei o `for .. of`. Já na segunda função, precisamos usar o índice, portanto usei o laço `for .. in`.