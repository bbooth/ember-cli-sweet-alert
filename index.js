/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sweet-alert',
  included: function (app) {
    app.import(app.bowerDirectory + "/sweetalert/dist/sweetalert.min.js");
    app.import(app.bowerDirectory + "/sweetalert/dist/sweetalert.css");
  }
};
