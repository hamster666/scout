'use strict';

/**
 * @ngdoc function
 * @name scoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoutApp
 */
 angular.module('scoutApp')
 .controller('MainCtrl', [ '$http', '$scope', function ($http, $scope) {

 	angular.extend($scope, {
 		place: {
 			lat: 51.505,
 			lng: -0.09,
 			zoom: 10
 		},
 		markers: {},
 		data: {}
 	});

 	var main = this;
 	var clientId = 'UNHXHYYH0QA5OERAA0WCQDRNWXHAUAFQXEHX4E10WL0LIO2V';
 	var clientSecret = 'I2CBDWCHZVLFGDXXFINGAHVOCEGJXOZUNZHDMW2OUYSDDD4K';

 	// main.data = [];

 	main.request = function(form) {

 		var location = $scope.location;

 		// configure API request URL
 		var url = 'https://api.foursquare.com/v2/venues/search?near=' + location + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20120609&query=pizza';

 		// check form is valid before making request
 		if(form.$valid){

			// make request to foursqaure api
 			$http.get(url).success(function(data){

 				$scope.data = data;

 				var coords = $scope.data.response.geocode.feature.geometry.center;
 				var venues = $scope.data.response.venues;

 				$scope.place.lat = coords.lat;
 				$scope.place.lng = coords.lng;

 				angular.forEach(venues, function(venue, key) {

 					$scope.markers['venue'+key] = {};
					$scope.markers['venue'+key].lat = venue.location.lat;
					$scope.markers['venue'+key].lng = venue.location.lng;
					$scope.markers['venue'+key].message = venue.name;

 				});

 			}).error(function(){
 				$scope.requestError = true;
 			});
 		}
 	};

 }]);
