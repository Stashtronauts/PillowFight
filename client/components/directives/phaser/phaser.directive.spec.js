'use strict';

describe('Directive: phaser', function () {

  // load the directive's module and view
  beforeEach(module('pillowfightApp'));
  beforeEach(module('app/directives/phaser/phaser.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<phaser></phaser>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the phaser directive');
  }));
});