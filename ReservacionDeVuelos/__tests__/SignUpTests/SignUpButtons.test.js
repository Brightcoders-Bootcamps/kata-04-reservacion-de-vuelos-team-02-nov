import React from 'react';
import SignUpButtons from '../../src/components/atoms/SignUpAtoms/SignUpButtons';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
