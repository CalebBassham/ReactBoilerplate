import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('NotFound Component (404)', () => {
  it('it should show 404 message', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  })
})