import React from 'react';
import GoogleSignUp from '../../src/components/atoms/SignUpAtoms/GoogleSignUp';
import {shallow} from 'enzyme';
import {SignUpConstants} from '../../src/utils/Constants';
import GoogleIcon from '../../src/assets/images/google.png';
import {store} from '../../redux/store';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<GoogleSignUp store={store} />);
});

describe('renders correclty', () => {
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('component exists', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'GoogleSignUp',
    );
    expect(component.exists()).toBeTruthy();
  });
  test('Icon img is displayed with the correct source', () => {
    const img = wrapper.findWhere(
      (node) => node.prop('testID') === 'GoogleIcon',
    );
    expect(img.props().source).toEqual(GoogleIcon);
  });
  test('btn title renders correctly', () => {
    const btnTitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'btnTitle',
    );

    expect(btnTitle.props().children).toEqual(
      SignUpConstants.GoogleSignUpButton,
    );
  });
});
