import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../src/layouts/Weather/Details/Details';

test('should render the weather details correctly', () => {
  const element = renderer
    .create(
      <Details
        humidity={10}
        windSpeedy="200km/h"
        sunrise="5.45pm"
        sunset="6.25am"
        updateData={() => jest.fn()}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
