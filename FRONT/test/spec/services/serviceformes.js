'use strict';

describe('Service: serviceFormes', function () {

  // load the service's module
  beforeEach(module('creathomeConfigApp'));

  // instantiate service
  var serviceFormes;
  beforeEach(inject(function (_serviceFormes_) {
    serviceFormes = _serviceFormes_;
  }));

  it('should do something', function () {
    expect(!!serviceFormes).toBe(true);
  });

});
