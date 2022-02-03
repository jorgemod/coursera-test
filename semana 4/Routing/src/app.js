(function () {



// primero tenemos que ligar nuestro ui-router como una dependencia
angular.module('RoutingApp',['ui.router']);

angular.module('RoutingApp')
// aplicamos su configuracion de rutas
.config(RoutesConfig);

// necesitamos injectar los servicios propios del ui-router
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/tab1');

  // Set up UI states
  // podemos tener muchos state todos ligados de esta forma no hay problema
  $stateProvider
    .state('tab1', {
      url: '/tab1',
      templateUrl: 'src/tab1.html'
    })

    .state('tab2', {
      url: '/tab2',
      templateUrl: 'src/tab2.html'
    });
}


})();
