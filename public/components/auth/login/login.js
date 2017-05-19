var app = angular.module("TodoApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.login = function (user) {
        UserService.login(user).then(function(response) {
            $location.path("/todos");
        }, function(response) {
            console.log('new user fail ');
            toastr.error(response.data.message);
        });
    };
}]);