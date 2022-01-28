(function(){
    'use strict';
    angular.module('MsgApp',[])
    .controller('MsgController',MsgController)
    // nota que aqui jalamos el filtro y lo definimos como loves
    // que hace referencia a nuestra funcion LovesFilter
    .filter('loves',LovesFilter);
    // aqui se lo injectamos a nuestro controlador
    // NOTA que el nombre del filtro es loves pero angular le pone la palabra filter
    // lo cual resulta en un lovesFilter
    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter){
        $scope.msg = "si funciono likes";
        $scope.msgFilter = lovesFilter($scope.msg);
    }


    //Aquí está la definicion de mi filtro personalizado
    function LovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        };
    }
})();