(function (){
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        $scope.list = "";
        $scope.data ="";
        
        
        $scope.check = ()=> {
            var lista = $scope.list;
            var nItems = lista.split(",").length;
            
            if (lista.split(",")[0] == ""){
                    
                $scope.data = "Please enter data first";
            }
            else{

                if (nItems <= 3){
                    $scope.data = "Enjoy!"
                }
                else{
                    $scope.data = "Too much!"
                        
                }
            }
        }

        
    };
})();
// minified js
// !function(){"use strict";function t(t){t.list="",t.data="",t.check=(()=>{var e=t.list,c=e.split(",").length;""==e.split(",")[0]?t.data="Please enter data first":t.data=c<=3?"Enjoy!":"Too much!"})}angular.module("LunchCheck",[]).controller("LunchCheckController",t),t.$inject=["$scope"]}();