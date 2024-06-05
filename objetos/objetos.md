# Objetos

Objetos são coleções de atributos, onde cada atributo é uma associação de _chave_ e _valor_. Os valores 
podem ser de qualquer tipo, incluindo funções e outros objetos. 

Exemplo de objeto em JavaScript: 

```javascript
    const aluno = {
        nome: "Pablo Moraes",
        idade: 23,
        endereço: {
            rua: "Joao Naves",
            numero: 2121,
            bairro: "Santa Mônica"
        }
    } 
```

Quando o objeto é declarado como o exemplo acima, ele é chamado de _object literal_. Porém, existem outras duas maneiras de se declarar um objeto.


### Factory Functions

_Factory functions_, como o próprio nome já explica, são funções que criam objetos. É preciso apenas passar os valores do objeto como parâmetro para função ao invés de criar os objetos diretamente, como nos _object literal_, e atribuir à uma variável o retorno da função, como pode ser visto no exemplo do arquivo _objetos.js_. 
 

### Constructor Functions
Uma _constructor function_ tem a mesma utilidade de uma _factory function_, porém é necessário utilizar a palavra-chave `new` quando formos criar o objeto. Ao utilizarmos `new`, o JavaScript cria um novo objeto chamado `this` e o retorna. 
Algumas diferenças entre as duas maneiras de criar objetos são:  
- _Factory functions_ são mais flexíveis, podendo retornar objetos de diferentes tipos dependendo do parâmetro recebido;
- _Factory functions_ são mais simples e não precisam de _boilerplating_;
- _Constructor functions_ possuem o conceito de herança, que pode ser útil em determinadas situações.

Em suma, tanto _factory functions_ quanto _constructor functions_ podem ser usados e a escolha cabe ao desenvolvedor. 

### Referências de objetos
Quando temos dois objetos do mesmo tipo (criados pela mesma _factory function_) e com os mesmos valores em todos seus atributos eles ainda são diferentes. Isso acontece pois, apesar de terem os mesmos valores atrelados aos seus campos, eles fazem referência a diferentes posiçoes de memória. No exemplo do arquivo _objetos.js_, a função `areSame()` retorna se dois objetos são o mesmo ou não. Nela, só recebemos um retorno positivo após usarmos `user3 = user1`, fazendo com que `user3` passe a "apontar" para o mesmo local de memória que `user1`.

### Mutação de objetos

Seguindo a mesma linha de raciocínio anterior, temos o último exemplo do arquivo _objetos.js_. Criamos um objeto e depois fazemos outro objeto apontar para ele. Se modificarmos o segundo objeto também iremos modificar o primeiro, pois ambos estão referenciando o mesmo objeto na memória. 





