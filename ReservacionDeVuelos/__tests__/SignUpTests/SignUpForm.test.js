import React from 'react';
import SignUpForm from '../../src/components/molecules/SignUpForm';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
