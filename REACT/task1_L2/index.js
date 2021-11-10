/* <div class="greeting">
    <div class="greeting__title"></div>
    <div class="greeting__text"></div>    
</div> 
*/


const rootElement = document.querySelector('#root');

// const wrapperElem = document.createElement('div');
// wrapperElem.classList.add('greeting');

// const titleElem = document.createElement('div');
// titleElem.textContent = 'Hello, World';
// titleElem.classList.add('greeting__title');

// const GreetingTextElem = document.createElement('div');
// GreetingTextElem.textContent = 'I\'m learning React';
// GreetingTextElem.classList.add('greeting__text');

// wrapperElem.append(titleElem, GreetingTextElem);

// rootElement.append(wrapperElem);

const element = React.createElement(
    'div',
    { className: 'greeting'  },
        React.createElement(
            'div',
            { className: 'greeting__title'  },
            'Hello, World'
        ),
        React.createElement(
            'div',
            { className: 'greeting__text'  },
            'I\'m learning React'
        ),    
);

ReactDOM.render(element, rootElement);