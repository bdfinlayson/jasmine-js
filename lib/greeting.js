function Greeting() {
}
Greeting.prototype.say = function(greeting) {
  this.friendlyGreeting = greeting
};

Greeting.prototype.isValidInput = function(input) {
  if (typeof(input) == 'string') {
    this.response = true;
  } else {
    this.response = false;
  }
};

Greeting.prototype.greetPerson = function(person) {
  this.person = person
  if (this.response) {
    return this.friendlyGreeting + ' ' + this.person;
  } else {
    throw new Error('Sorry, your input was invalid!');
  }
};


module.exports = Greeting;

