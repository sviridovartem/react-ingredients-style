var React = require('react');
var ReactDom = require ('react-dom');
var ListManager = require('./components/ListManager.jsx')

ReactDom.render(<ListManager title="Ingredients"/>, document.getElementById('Ingredients'));
ReactDom.render(<ListManager title="ToDo/Buy"/>, document.getElementById('ToDo'));
ReactDom.render(<ListManager title="Christmas" headingColor="#b31217"/>, document.getElementById('Buy'));
