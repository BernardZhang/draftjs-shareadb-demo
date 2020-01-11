var React = require('react');
var editor = require('./editor.jsx');

class Main extends React.Component {
  render() {
    return (
      <editor.RichEditorExample {...this.props} pageId='5e0da46cebd456dc51c99ccf'/>
    );
  }
}

module.exports = Main;