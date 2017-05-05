import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Home } from './Home';

describe('Home component', () => {
  test('verify snapshot', () => {
    const component = shallow(<Home />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
