'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('scoutApp'));

    var MainCtrl;

    // Initialize the controller 
    beforeEach(inject(function ($controller) {
        MainCtrl = $controller('MainCtrl'); 
    }));


    it('should extend MainCtrl to have coords', function () {
        expect(MainCtrl.mapCenter.lat).toBe(51.505);
        expect(MainCtrl.mapCenter.lng).toBe(-0.09);
    });

    it('sets success dependent on request outcome and show result', function() {
        var val = false;
        MainCtrl.requestOutcome(val);
        expect(MainCtrl.success).toEqual(false);
        expect(MainCtrl.showResult).toEqual(true);
    });

});
