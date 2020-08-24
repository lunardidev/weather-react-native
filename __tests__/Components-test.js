import React from 'react';
import renderer from 'react-test-renderer';

import { Loading, Tabs } from '../src/components';

test('should render the Tab component correctly', () => {
  const element = renderer
    .create(
      <Tabs
        onPress={(obj) => jest.fn()}
        items={[
          {
            date: '03/2020',
            weekday: 'Sábado',
            max: 25,
            min: 10,
            description: 'Sol',
            condition: 'clear',
            actived: true,
          },
        ]}
        backgroundColor="#fff"
        selectedColor="#fff"
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

test('should render the Loading component correctly', () => {
  const element = renderer.create(<Loading />).toJSON();
  expect(element).toMatchSnapshot();
});
