describe('Greeting', function() {

  var Greeting = require('../lib/greeting');

  beforeEach(function() {
    greeting = new Greeting()
  });

  it('should say greeting', function() {
    greeting.say('hello');
    expect(greeting.friendlyGreeting).toEqual('hello');
  });

  it('should accept a string', function() {
    greeting.isValidInput('hello');
    expect(greeting.response).toEqual(true);
  });

  it('should not accept invalid input', function() {
    greeting.isValidInput(1900);
    expect(greeting.response).toEqual(false);
  });
});

