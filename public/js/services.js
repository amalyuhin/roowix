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
                data: $.param(data),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
            this.post('message', message);
        };

        return ApiService;
    }]);