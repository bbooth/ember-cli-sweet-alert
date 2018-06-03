'use strict';

module.exports = {
  name: 'ember-cli-sweet-alert',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + "/sweetalert/dist/sweetalert.css");

    app.import({
      development: app.bowerDirectory + '/sweetalert/dist/sweetalert-dev.js',
      production: app.bowerDirectory + '/sweetalert/dist/sweetalert.min.js'
    });

    app.import(this.treePaths.vendor + '/shim.js');
  },
};
