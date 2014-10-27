var Dispatcher = require('flux').Dispatcher;
var merge = require('react/lib/merge');
// var copyProperties = require('react/lib/copyProperties');

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function (action) {
    console.log('action', action);

    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

// var AppDispatcher = copyProperties(new Dispatcher(), {
//   handleViewAction: function (action) {
//     var payload = {
//       source: PayloadSources.VIEW_ACTION,
//       action: action
//     };
//     this.dispatch(payload);
//   }
// });

module.exports = AppDispatcher;