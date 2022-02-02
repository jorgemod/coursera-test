(function(){
    'use strict';

    angular.module('ControllerAsSintax', [])
    .controller('ParentController',ParentController)
    .controller('ChildController', ChildController);

    // estámos asignandole propiedades directas al controller y no usamos el servicio del scope     
    function ParentController(){
        var parent = this;
        parent.value = 5;
    }
    function ChildController(){
        var child = this;
        child.value = 1;
    }

})();