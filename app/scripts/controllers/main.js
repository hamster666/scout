'use strict';

/**
 * @ngdoc function
 * @name scoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoutApp
 */
angular.module('scoutApp')
  .controller('MainCtrl', [ '$http', function ($http) {
     
  		var main = this;
     	var clientId = 'UNHXHYYH0QA5OERAA0WCQDRNWXHAUAFQXEHX4E10WL0LIO2V';
     	var clientSecret = 'I2CBDWCHZVLFGDXXFINGAHVOCEGJXOZUNZHDMW2OUYSDDD4K';


  		main.data = [];

  		main.request = function() {
	     	
	     	var location = main.location;
	  		var url = 'https://api.foursquare.com/v2/venues/search?near=' + location + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20120609';

  			console.log(location);
  			console.log(url);

	  		$http.get(url).success(function(data){
	  			console.log('go');
	  			
	  			main.data = data;
	
	  		});
  		};
    }]);
