import React from 'react';
import SignUpTitle from '../../src/components/atoms/SignUpAtoms/SignUpTitle';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
