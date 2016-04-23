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
     
     	var clientId = 'UNHXHYYH0QA5OERAA0WCQDRNWXHAUAFQXEHX4E10WL0LIO2V';
     	var clientSecret = 'I2CBDWCHZVLFGDXXFINGAHVOCEGJXOZUNZHDMW2OUYSDDD4K';
  		var url = 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20120609';

  		$http.get(url).success(function(data){
  			
  			$scope.data = data;
  			console.log(data);

  		});

    }]);
