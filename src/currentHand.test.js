const currentHand = require('./currentHand');

describe('currentHand', () => {
  it("[] should return []", () => {
    expect(currentHand([])).toStrictEqual([]);
  });
});
