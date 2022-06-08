import { render, screen } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import CreateTrip from './forms/createtrip.js';

test('Create Trip Test', () => {
  render(<CreateTrip/>);
})

describe('Create Trip form', () => {
  const container = shallow(<CreateTrip/>);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have start date field', () => {
    expect(container.find('input[id="sdate"]').length).toEqual(1);
  });

  it('should have end date field', () => {
    expect(container.find('input[id="edate"]').length).toEqual(1);
  });

  it('should have destination field', () => {
    expect(container.find('input[id="dest"]').length).toEqual(1);
  });

  it('should have title field', () => {
    expect(container.find('input[id="title"]').length).toEqual(1);
  });

  it('should have participants field', () => {
    expect(container.find('input[id="participants"]').length).toEqual(1);
  });

  it('should have submit button', () => {
    expect(container.find('input[type="submit"]').length).toEqual(1);
  });

  // it('should open a dialog after pressing submit button', () => {
  //   container.find('input[type="submit"]').simulate('click');
  //   expect(CreateTrip().openDialog).toBe(true);
  // });
})
