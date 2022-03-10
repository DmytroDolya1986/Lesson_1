import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class Page extends Component {
    state = {
        UserData: {
          firstName: 'Tom',
          lastName: 'Form'
        }
    };
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          userData: {
            ...this.state.userData,
            [name]: value
          }
        });
    }

    render () {

        return (
            <div className="page">
                <main className="content">
                    <ShoppingCart userData={this.state.UserData}/>
                    <Profile 
                        userData={this.state.userData} 
                        handleChange={this.handleChange}
                    />
                </main>
            </div>
        );
    }
};

export default Page;
