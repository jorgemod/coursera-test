(function (){
    'use strict';

    angular.module('DigestCycle',[])
    .controller('DigestController',DigestController);

    DigestController.$inject = ['$scope','$timeout'];

    function DigestController($scope, $timeout){
        
        $scope.counter = 0;
        $scope.increment = function(){
            // la mejor manera de usar timers es ocupando los propios de angular
            // inyectandolos con $timeout
            $timeout(function (){
                $scope.counter ++;
                console.log("incrementé!");        
            },2000);
        };



        // $scope.increment = function(){
            
        //     setTimeout(function(){
        //         // con apply ejecutamos los watchers manualmente pero solo para lo que está adentro
        //         // de la funcion, además de lanzar excepciones tanto de angular como de js
        //         $scope.$apply(function(){
                    
        //             $scope.counter ++;
        //             console.log("incrementé!");
        //         });

        //     },2000)
        // };












//         $scope.increment = function(){
            
//             setTimeout(function(){
                
//                 $scope.counter ++;
//                 console.log("incrementé!");
// // El comando digest nos ayuda a actualizar los "watchers" para que pueda actualizar
// // las variables y vuelva a repintar el navegador 
//                 $scope.$digest();
//             },2000)
//         };
    }
})();