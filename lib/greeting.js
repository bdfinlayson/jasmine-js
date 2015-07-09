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


module.exports = Greeting;

