import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';
import { getUsersList } from '../usersGateway';

jest.mock('../usersGateway', () => {
  return {
    getUsersList: jest.fn(() => Promise.resolve())
  }
})


describe('User', () => {
  it('should not render count if no unread messages', () => {
    const wrappedComponent = shallow(<User />);    
    
    expect(wrappedComponent.find('.user').exists()).toEqual(
        false,
      );
  });
  
  it('should not render count if no unread messages', () => {
    const wrappedComponent = shallow(<User />);    
    wrappedComponent.setState({
      userData: {
        avatar_url: 'https://example.com',
        name: 'John',
        location: 'Planet Earth',
      },
    });
    expect(wrappedComponent.find('.user')).toMatchSnapshot();
  });

  it('should function to be called', () => {
    shallow(<User />);    

    expect(getUsersList).toBeCalled();
  });

});