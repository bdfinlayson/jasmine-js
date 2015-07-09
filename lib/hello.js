function Hello() {
}
Hello.prototype.say = function(greeting) {
  this.friendlyGreeting = greeting
};

module.exports = Hello;

