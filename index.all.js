var React = require('react');
if(React && !React.createClass){
    React.createClass = require('create-react-class');
}
require('znui-react/index.all.js');
module.exports = require('./index.js');