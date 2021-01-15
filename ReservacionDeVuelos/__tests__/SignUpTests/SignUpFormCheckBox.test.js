import React from 'react';
import SignUpFormCheckBox from '../../src/components/atoms/SignUpAtoms/SignUpFormCheckBox';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpFormCheckBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
