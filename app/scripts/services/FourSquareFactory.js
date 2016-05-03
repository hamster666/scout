'use strict';

/**
 * @ngdoc function
 * @name scoutApp.factory:fourSquareFac
 * @description
 * # fourSquareFac
 * factory of the scoutApp
 */

 angular.module('scoutApp')
 .factory('fourSquareFac',['$http', function($http){

	// configure API request URL
 	var clientId = 'UNHXHYYH0QA5OERAA0WCQDRNWXHAUAFQXEHX4E10WL0LIO2V';
 	var clientSecret = 'I2CBDWCHZVLFGDXXFINGAHVOCEGJXOZUNZHDMW2OUYSDDD4K';
	var url = 'https://api.foursquare.com/v2/venues/search';
	
	var results = {};

	results.getData = function(location){
		var params = '?near=' + location + '&client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20120609&query=pizza';
		var requestUrl = url+params;

		return $http.get(requestUrl).then(function(response){
			results.formattedData = formatData(response.data);
			return(results);
		});
	}

	function formatData(data){

		var newData = {}
 		
 		newData.coords = data.response.geocode.feature.geometry.center;
		newData.match = data.response.geocode.feature.matchedName;
		newData.venues = data.response.venues;

		return newData;
	}

	return results;

 }]);

