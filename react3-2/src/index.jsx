import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');

class SearchField extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="search">
              <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
            <div className="search__field">
                <input className="search__input" type="text"/>
                <button className="search__button">Search</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<SearchField  name="Bob" age={17} /> , rootElement);
