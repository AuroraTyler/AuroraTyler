var app = angular.module("myHomeworkList", []);
app.controller("myCtrl", function($scope) {
    $scope.assignments = ["Presentation", "Term Paper", "Read Ch. 6"];
    $scope.titleName = "My Assignments";
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.assignments.indexOf($scope.addMe) == -1) {
            $scope.assignments.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already on your homework list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.assignments.splice(x, 1);
    }
});