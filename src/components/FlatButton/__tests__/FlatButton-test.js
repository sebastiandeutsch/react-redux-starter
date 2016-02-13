import React from 'react';
import { shallow } from 'enzyme';
import FlatButton from 'components/FlatButton';

describe('FlatButton', () => {

  it('should render', () => {
    const wrapper = shallow(<FlatButton onClick={function(event) { return; }}>Click</FlatButton>);
    expect(wrapper.text()).toEqual('Click');
  });
});
