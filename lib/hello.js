function Hello() {
}
Hello.prototype.say = function(greeting) {
  this.friendlyGreeting = greeting
};

Hello.prototype.isValidInput = function(input) {
  if (typeof(input) == 'string') {
    this.response = true;
  } else {
    this.response = false;
  }
};


module.exports = Hello;

