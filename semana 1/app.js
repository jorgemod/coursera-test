(function (){
    'use strict';

    angular.module('myFirstApp',[])
// todo lo que viene con $ es un servicio

    .controller('MyFirstController',function($scope,$filter){
        $scope.name = "Jorge";
        
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    });
})();