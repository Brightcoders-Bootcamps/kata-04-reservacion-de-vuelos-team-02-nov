import React from 'react';
import SignUpButton from '../../src/components/atoms/SignUpAtoms/SignUpButton';
import {shallow} from 'enzyme';
import {SignUpConstants} from '../../src/utils/Constants';
import {colors} from '../../src/styles/Colors';
let wrapper;
beforeEach(() => {
  wrapper = shallow(<SignUpButton />);
});

describe('SignUpButton component renders as expected', () => {
  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('button exists', () => {
    const btn = wrapper.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    expect(btn.length).toBe(1);
  });
  test('button contains a title', () => {
    const btnTitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'btnTitle',
    );
    expect(btnTitle.length).toBe(1);
  });
  test('button title matches with our constant', () => {
    const btnTitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'btnTitle',
    );
    expect(btnTitle.props().children).toBe(SignUpConstants.SignUpButton);
  });
});

describe('Funcionality when is not enabled', () => {
  const mockFormValues = {
    name: '',
    email: '',
    password: '',
    termsCheckbox: false,
    updatesCheckbox: false,
    validName: false,
    validEmail: false,
    validPassword: false,
    validatedName: false,
    validatedEmail: false,
    validatedPassword: false,
  };
  const signUpSubmitMock = jest.fn();
  const wrapper = shallow(
    <SignUpButton
      isButtonEnabled={false}
      formValues={mockFormValues}
      signUpSubmit={signUpSubmitMock}
    />,
  );
  test('buttton color matches with our color constant', () => {
    const btn = wrapper.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    expect(btn.props().style[1].backgroundColor).toEqual(colors.ligthGray);
  });
  test('submit function is not called', ()=>{
    const btn = wrapper.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    btn.props().onPress();
    wrapper.update();
    expect(signUpSubmitMock).not.toHaveBeenCalled();
  })
});

describe('Funcionality when is enabled', () => {
  const mockFormValues = {
    name: 'juan',
    email: 'juan@mail.com',
    password: 'mm23mm222',
    termsCheckbox: true,
    updatesCheckbox: true,
    validName: true,
    validEmail: true,
    validPassword: true,
    validatedName: true,
    validatedEmail: true,
    validatedPassword: true,
  };
  const signUpSubmitMock = jest.fn();
  const wrapper = shallow(
    <SignUpButton
      isButtonEnabled={true}
      formValues={mockFormValues}
      signUpSubmit={signUpSubmitMock}
    />,
  );
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('buttton color matches with our color constant', () => {
    const btn = wrapper.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    expect(btn.props().style[1].backgroundColor).toEqual(colors.Purple);
  });
  test('onPress event gtsc called', () => {
    const btn = wrapper.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    btn.props().onPress();
    wrapper.update();
    expect(signUpSubmitMock).toHaveBeenCalled();
  });
});
