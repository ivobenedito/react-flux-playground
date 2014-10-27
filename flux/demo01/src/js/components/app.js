/** @jsx React.DOM **/

var React = require('react');
var Catalog = require('../components/app-catalog.js');

var App =
  React.createClass({
    render: function () {
      return (
        <div>
          <h1>Lets Shop</h1>
          <Catalog />
        </div>
      );
    }
  });

module.exports = App;
