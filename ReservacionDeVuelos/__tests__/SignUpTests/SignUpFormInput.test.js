import React from 'react';
import SignUpFormInput from '../../src/components/atoms/SignUpAtoms/SignUpFormInput';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpFormInput />).toJSON();
  expect(tree).toMatchSnapshot();
});