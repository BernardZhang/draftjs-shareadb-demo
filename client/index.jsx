const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./main.jsx');
const printMe = require('./print');

ReactDOM.render(
    <Main />,
    document.getElementById("main")
);


if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
