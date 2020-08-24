import { today } from '../src/helpers';

it('should return the date of the day', () => {
  const dateHelper = today();
  const dateTest = new Date();

  const dayTest = dateTest.getDate().toString();
  const yearTest = dateTest.getFullYear().toString();

  expect(dateHelper.year).toEqual(yearTest);
  expect(dateHelper.day).toEqual(dayTest);
});
