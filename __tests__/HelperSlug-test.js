import { conditionSlug } from '../src/helpers';

describe('should fetch colors of the weather', () => {
  it('should fetch the linear color of storm weather', () => {
    const slugStorm = conditionSlug('storm');
    expect(slugStorm.linear).toEqual('#0d2d45');
  });
  it('should fetch the linear color of snow weather', () => {
    const slugSnow = conditionSlug('snow');
    expect(slugSnow.linear).toEqual('#5681BA');
  });

  it('should fetch the linear color of default weather', () => {
    const slugSnow = conditionSlug('');
    expect(slugSnow.linear).toEqual('#7c5c6b');
  });
});
