var app = angular.module('moocs', []);

var pic   = "http://placehold.it/400x300";
var pics  = [];
for (var i=0;i<15;i++)
{
pics.push(x);
}




app.controller('myCtrl', function($scope) {
    $scope.pics= pics;
});