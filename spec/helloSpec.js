describe('Hello', function() {

  var Hello = require('../lib/hello');

  beforeEach(function() {
    hello = new Hello()
    greeting = 'hello';
  });

  it('should say hello', function() {
    hello.say(greeting);
    expect(hello.friendlyGreeting).toEqual(greeting);
  });
});
