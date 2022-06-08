import React from 'react';
import { shallow, configure } from 'enzyme';
import EnterCode from './forms/entercode';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<EnterCode />', () => {
    const component = shallow(<EnterCode/>)
    it('should call handleChange', () => {
        const instance = component.instance()
        const spy = jest.spyOn(instance, 'handleChange')
        instance.forceUpdate();

        const input = component.find('input')
        input.simulate('change', { target: { value: '12345678' } })
        expect(spy).toHaveBeenCalled()
        expect(component.state().value).toContain('12345678')
    })
    it('should change state to "12345678"', () => {
        const input = component.find('input')
        input.simulate('change', { target: { value: '12345678' } })
        expect(component.state().value).toEqual('12345678')
    })
})