/**
* Name:   Email Generator
* Author: Mark Onofrio
* Website: markonofrio.com
* Version: 0.0.1

* AngularJS v1.3.15
* Wysiwyg: https://github.com/TerryMooreII/angular-wysiwyg
* Bootstrap: 3.3.6
 */

var app = angular.module("EmailTempApp", ['colorpicker.module', 'wysiwyg.module']);

app.controller("AppCntrl", ['$scope', '$filter', function ($scope, $filter){

    $scope.radioValue = "radioValue";

    $scope.date = new Date();
    $scope.subject = $filter('date')(new Date(), 'MMMM, y');

    $scope.Region = {
        regionName: 'New York',
        preHeader: ''
    };

}]);