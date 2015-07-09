describe('Hello', function() {

  var Hello = require('../lib/hello');

  beforeEach(function() {
    hello = new Hello()
  });

  it('should say hello', function() {
    hello.say('hello');
    expect(hello.friendlyGreeting).toEqual('hello');
  });

  it('should accept a string', function() {
    hello.isValidInput('hello');
    expect(hello.response).toEqual(true);
  });
});

