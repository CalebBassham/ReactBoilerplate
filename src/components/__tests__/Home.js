import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home Component', () => {
  it('should show hello message', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot()
  })
})