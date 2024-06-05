// factory functions
function createUser(name, email) {   
    return {
        name, 
        email,
        show () {
            console.log(`name: ${this.name}`);
            console.log(`email: ${this.email}`);
        }
    };
}
let user1 = createUser('pablo', 'pablo@compass.com.br');
user1.show();


// constructor function 
function User(name, email) {
    this.name = name;
    this.email = email;
    
    this.show = function() {
        console.log(`name: ${this.name}`);
        console.log(`email: ${this.email}`);
    }

    this.getName = function() {
        return this.name;
    }

    this.setName = function(name) {
        this.name = name;
    }
}
let user2 = new User('pablo', 'pablo@compass.com.br');
user2.show();


// igualdade de objetos
function areSame(arg1, arg2) {
    return arg1 === arg2;
}

console.log(areEqual(user1, user2));
let user3 = user1;
console.log(areSame(user1, user2));
console.log(areSame(user1, user3));

// mutação de objetos
let pessoa = new User('ana', 'ana@compasso.com.br');
let pessoa2 = pessoa;

console.log(pessoa2.getName());

pessoa2.setName('alice');
console.log(pessoa.getName());




