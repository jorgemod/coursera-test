(function (){
    'use strict';
    var lista = [
        {nombre: "jorge",edad:24},
        {nombre: "ana",edad:43},
        {nombre: "alex",edad:25},
        {nombre: "moni",edad:24},
        
    ];
    angular.module('NGRepeat',[])
    .controller('NGRepeatController',NGRepeatController);

    NGRepeatController.$inject= ['$scope'];
    function NGRepeatController($scope){
        $scope.lista = lista;
        $scope.name = "";
        $scope.edad = "";
        $scope.agregar = ()=>{
            var item = {
                nombre: $scope.name,
                edad: $scope.edad
            };
            lista.push(item);
        };
    }
})();   