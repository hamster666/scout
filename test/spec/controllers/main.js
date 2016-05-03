'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('scoutApp'));

    var MainCtrl,
    scope,
    httpMock;

  // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        httpMock = $httpBackend;
        MainCtrl = $controller('MainCtrl', {
          $scope: scope
          // place here mocked dependencies
        }); 
    }));


    it('should attach a test var to the scope', function () {
        expect(MainCtrl.test).toBe('thing');
        expect(MainCtrl.what).toBe('1986');
    });

    //  it('should invoke service', function() {
    //     // httpMock.expectGET('https://api.foursquare.com/v2/venues/search');
    //     httpMock.flush();
    // });


    afterEach(function() {
      httpMock.verifyNoOutstandingExpectation();
      httpMock.verifyNoOutstandingRequest();
    });
});
