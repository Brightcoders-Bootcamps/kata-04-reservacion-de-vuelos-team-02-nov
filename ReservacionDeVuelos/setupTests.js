import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
///////////////////////////////////////////// react navigation
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
///////////////////////////////////// jsdom
const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
//////////////////firebase
jest.mock('@react-native-firebase/app');
jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    signInWithCredential: jest.fn(),
    credential: jest.fn(),
  });
});
////////////////////google
jest.mock('@react-native-community/google-signin', () => {
  return () => ({
    signIn: jest.fn(),
    getCurrentUser: jest.fn(),
  });
});

/////////////async storage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
Enzyme.configure({adapter: new Adapter()});
