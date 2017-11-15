var app = angular.module('myAppModule', []);

//creating a controller
var additionController =  function ($scope) {
    var Student = {
        'name': 'charles okoyoh',
        'math': 98,
        'comp-science': 90
    }
    $scope.message = "Your name is " + Student.name;
}

// registering the above controller
app.controller("additionController",additionController);
