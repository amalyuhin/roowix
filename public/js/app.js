'use strict';

angular.module('roowixApp', [
    'roowixApp.filters',
    'roowixApp.services',
    'roowixApp.directives',
    'roowixApp.controllers',
    'ui.bootstrap'
]).

run(function($rootScope) {
    $rootScope.isActiveNavMenu = true;
    $rootScope.toggleNavMenu = function() {
        $rootScope.isActiveNavMenu = !$rootScope.isActiveNavMenu;
    };
});
