'use strict';

var services = angular.module('roowixApp.services', []);

services
    .factory('ApiService', ['$http', function ($http) {
        var ApiService = {
            baseUrl: '/api/'
        };

        ApiService.post = function (method, data) {
            return $http({
                url: this.baseUrl + method,
                method: 'POST',
                data: data,
                headers: { 'Content-Type': 'application/json' }
            });
        };

        ApiService.get = function (method, params) {
            return $http({
                url:    this.baseUrl + method,
                method: 'GET',
                params: params
            })
        };

        ApiService.sendMessage = function(message) {
            return this.post('message', message);
        };

        return ApiService;
    }]);