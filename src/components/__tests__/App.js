import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App Component', () => {
  it('it should show the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})