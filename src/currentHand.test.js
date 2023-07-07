const hello = require('./currentHand');

describe('currentHand', () => {
  it('should return hello', () => {
    expect(currentHand()).toBe('hello');
  });
});
