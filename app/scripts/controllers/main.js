'use strict';

/**
 * @ngdoc function
 * @name scoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoutApp
 */

angular.module('scoutApp')
 	.controller('MainCtrl', ['fourSquareFac', function (fourSquareFac) {

 	var main = this;
	main.showResult = false;

 	angular.extend(main, {
 		mapCenter: {
 			lat: 51.505,
 			lng: -0.09,
 			zoom: 10
 		},
 		markers: {}
 	});

 	main.request = function(form) {

 		// check form is valid before making request
 		if(form.$valid){
			// call factory to make request and format data
 			fourSquareFac.getData(main.location).then(function(data){
	 			showResults(data.formattedData);
	 			main.requestOutcome(true);
	 		},
	 		function(){
	 			console.log('mega fail');
	 			main.requestOutcome(false);
	 		})
 		}

 	};

 	// update 'main' object to update view
	function showResults(d){

	 	angular.extend(main, {
	 		match: d.match,
	 		venues: d.venues
	 	});

	 	main.mapCenter.lat = d.coords.lat;
		main.mapCenter.lng = d.coords.lng;

		angular.forEach(main.venues, function(venue, key) {
			var id = 'venue'+key;
			main.markers[id] = {};
			main.markers[id].lat = venue.location.lat;
			main.markers[id].lng = venue.location.lng;
			main.markers[id].message = venue.name;
		});
	}

	// show location result title
	main.requestOutcome = function(val){
		main.showResult = true;
		main.success = val;
	}
}]);
