//module app is defined here
var app = angular.module('myAppModule', []);

//creating a controller
var additionController =  function ($scope) {
    var Student = {
        'name': 'charles okoyoh',
        'math': 98,
        'it': 90,
        'comm_skills': 77
    }
    $scope.message = "Your name is " + Student.name; //displays name of student
    $scope.sum = Student.math + Student.it + Student.comm_skills
}

// registering the above controller in the module created
app.controller("additionController",additionController);

//creating a service called hexad (for hexadecimal)
app.service('hexad', function() {
    this.pickNumber = function (x) {
        return x.toString(16);
    }
});

app.controller('hexadController', function($scope, hexad) {
    $scope.hex = hexad.pickNumber(54075347);
});