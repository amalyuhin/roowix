'use strict';

var module = angular.module('roowixApp.controllers', []);

module.controller('MapCtrl', ['$scope', 'ApiService', function($scope, api) {
    ymaps.ready(init);
    $scope.map = {};

    $scope.message = {};
    $scope.submit = function() {
        api.sendMessage($scope.message);
    };

    function init() {
        $scope.map = new ymaps.Map("map", {
            center: [54.85109, 83.100674],
            zoom: 16,
            controls: [],
            behaviors: ['drag']
        });

        var marker = new ymaps.Placemark([54.85109, 83.100674], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/pin.png',
            iconImageSize: [62, 67],
            iconImageOffset: [-22, -62]
        });

        marker.events.add('click', function(event) {
            var elem = event.get('target');
            var text = "<strong>Roowix</strong><p>г. Новосибирск, Академгородок,<br/>проспект Академика Лаврентьева, 6/1, оф. 801</p>";

            elem.properties.set('balloonContent', text);
        });

        $scope.map.controls.add("zoomControl", {
            position: {
                top: 50,
                left: '85%'
            }
        });

        $scope.map.geoObjects.add(marker);
    }
}]);