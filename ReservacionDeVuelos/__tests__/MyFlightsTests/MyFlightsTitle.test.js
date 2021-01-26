import React from 'react'
import {shallow} from 'enzyme'
import MyFlightsTitle from '../../src/components/atoms/MyFlightsAtoms/MyFlightsTitle'

const props = {
    title: 'title'
}

describe('Render correctly', () =>{
    const wrapper = shallow(<MyFlightsTitle {...props}/>)
    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    test('Render correctly', () => {
        const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
        expect(render.exists()).toBeTruthy();
      });
      test('Title correctly', () => {
        const title = wrapper.findWhere((node) => node.prop('testID') === 'text');
        expect(title.props().children).toEqual(props.title);
      });
      
})