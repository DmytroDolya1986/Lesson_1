{/* <div class="greeting">Hello, React!</div> */}

const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);
 
// const wrapperElem = document.createElement('div');
// wrapperElem.classList.add('greeting');

// const titleElem = document.createElement('div');
// titleElem.textContent = 'Hello, world';
// titleElem.classList.add('greeting__title');

// const greetingTextElem = document.createElement('div');
// greetingTextElem.textContent = 'I\'m learning React';
// greetingTextElem.classList.add('greeting__text');

// wrapperElem.append(titleElem, greetingTextElem);

const greetingElem = React.createElement(
    'div',
    { className: 'greeting' },
    'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement);



