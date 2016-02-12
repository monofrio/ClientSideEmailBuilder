/**
* Name:   Email Generator
* Author: Mark Onofrio
* Website: markonofrio.com
* Version: 0.0.1

* AngularJS v1.3.15
* Wysiwyg: https://github.com/TerryMooreII/angular-wysiwyg
* Bootstrap: 3.3.6
 */

var app = angular.module("EmailTempApp", []);

app.controller("AppCntrl", ['$scope', '$filter', function ($scope, $filter){


    $scope.HTMLview = "http://support.adl.org/site/MessageViewer";
    $scope.TEXTview = "View this email in your browser!";
    $scope.date = new Date();
    $scope.subject = $filter('date')(new Date(), 'MMMM, y');

}]);