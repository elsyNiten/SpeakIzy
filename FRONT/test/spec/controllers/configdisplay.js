'use strict';

describe('Controller: ConfigdisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('creathomeConfigApp'));

  var ConfigdisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigdisplayCtrl = $controller('ConfigdisplayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfigdisplayCtrl.awesomeThings.length).toBe(3);
  });
});
