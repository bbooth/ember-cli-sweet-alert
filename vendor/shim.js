(function() {
	
	/* globals define, swal */
	['swal', 'sweetalert'].forEach(function(name) {
		define(name, [], function() {
			'use strict';

			return {
				default: swal
			};
		});
	});

})();