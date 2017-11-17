angular.module('todoListApp', [])
    .controller('todoController', function($scope) {
        $scope.tasks = [];
        $scope.addTask = function() {
            $scope.tasks.push($scope.title);
            this.title = '';
            console.log("new task added")
        };
        $scope.deleteTask = function() {
            $scope.tasks.splice(this.$index, 1);
            alert("Deleting task...")
        }
    });