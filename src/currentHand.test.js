const currentHand = require('./currentHand');

describe('currentHand', () => {
  it("[] should return []", () => {
    expect(currentHand([])).toStrictEqual([]);
  });

  it("['Hog Rider','Earthquake','Archer Queen','Giant Skeleton','Fire Spirit','Cannon'] \
     should return ['Hog Rider', 'Earthquake']", () => {
    expect(
    currentHand(
      [
        'Hog Rider',
        'Earthquake',
        'Archer Queen',
        'Giant Skeleton',
        'Fire Spirit',
        'Cannon']))
    .toStrictEqual(['Hog Rider', 'Earthquake'].sort());
  });


  it("['Longes option'] \
  should return ['Hog Rider', 'Earthquake']", () => {
 expect(
 currentHand(
   [
    'Hog Rider',
    'Earthquake',
    'Archer Queen',
    'Giant Skeleton',
    'Fire Spirit',
    'Cannon',
    'Skeletons',
    'Hog Rider',
    'The Log',
    'Fire Spirit',
    'Earthquake',
    'Giant Skeleton',
    'Skeletons',
    'Archer Queen',
    'Fire Spirit',
    'Cannon',
    'Giant Skeleton',
    'Skeletons']))
 .toStrictEqual(['Hog Rider', 'The Log', 'Earthquake', 'Archer Queen'].sort());
});


});
