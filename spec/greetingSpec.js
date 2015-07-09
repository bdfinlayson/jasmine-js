describe('Greeting', function() {

  var Greeting = require('../lib/greeting');

  beforeEach(function() {
    greeting = new Greeting()
  });

  it('should say greeting', function() {
    greeting.say('Hello');
    expect(greeting.friendlyGreeting).toEqual('Hello');
  });

  it('should accept a string', function() {
    greeting.isValidInput('Hello');
    expect(greeting.response).toEqual(true);
  });

  it('should not accept invalid input', function() {
    greeting.isValidInput(1900);
    expect(greeting.response).toEqual(false);
  });

  it('should greet a person', function() {
    greeting.isValidInput('Bryan Finlayson');
    greeting.say('Hello');
    expect(greeting.greetPerson('Bryan Finlayson')).toEqual('Hello Bryan Finlayson');
  });
});

