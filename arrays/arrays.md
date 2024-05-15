# Arrays
o arquivo _arrays.js_ demonstra algumas funcionalidades de _arrays_ em JavaScript. _Arrays_ são objetos muito úteis que armazenam dados de forma indexada. Escolhi alguns métodos interessantes do objeto _Array_ para expor, porém existem diversos outros métodos que podem ser vistos [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)       

### 1. `arrayFromRange()`
A primeira função recebe dois argumentos: um inteiro `min` e outro inteiro `max`. Ela irá retornar um array com números estão no intervalo [`min`, `max`], incrementados de 1 em 1. Por exemplo, a chamada `arrayFromRange(-2, 1)`, retornaria o array `[-2, -1, 0, 1]`.
O método interessante de _array_ que usei nesta função foi o `push()`. Ele irá inserir, no fim do array, o elemento passado como argumento.

### 2. `filtra()`
A função irá receber um array de inteiros e um inteiro `limite` e retornar o array com apenas os números que são maiores que `limite`. O objeto array possui o método `filter()`, que é muito útil para essa situação. O método `filter()` recebe como argumento uma _callback function_, que é uma função passada por argumento para outra função. Isso é possível em JavaScript, pois funções são objetos. O corpo da _callback function_ irá determinar a lógica que `filter()` irá usar para filtrar o array.

### 3. `ordena()`
Ordenação de arrays é uma funcionalidade bastante utilizada em programação e o JavaScript oferece um método para isso. Assim como `filter()`, o método `sort()` recebe como argumento uma _callback function_, que irá ditar a lógica da ordenação. No exemplo que usei, a ordenação é feita de forma decrescente.

### 4. `occurrences()` 
Essa função recebe um array de inteiros e um número `element`. Ela irá retornar a quantidade de ocorrências de `element` no array. Em vez de usar a abordagem mais simples e apenas percorrer todo o array sequencialmente usando um laço, decidi expor o método `reduce()`. O `reduce()` recebe como argumento uma _callback function_ que possui um acumulador e um valor atual e um valor inicial. Essa _callback function_ será executada em cada elemento do array e o retornará um valor único ao acumulador (que é inicializado com o valor incial, se passado). Após a função de _callback_ ser executada em todos os valores do array, o valor final é retornado pelo `reduce()`. Na função `occurrences()`, a _callback_ passada ao `reduce()` verifica se o valor atual é igual a `element`. Se sim, retornamos o acumulador incrementado em 1. Se não, retornarmos apenas o acumulador.

