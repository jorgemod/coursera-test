(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getItems();
      }]
    }
  })

  // aquí está la vista de detalles de cada item
  .state('itemDetail', {
    // itemId es nuestra variable que vamos a recibir
    url: '/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      // resolve ejecuta promesas antes de cargar la vista
      // injectamos stateParams para que el resolve tenga acceso al servicio
      item: ['$stateParams', 'ShoppingListService',
            // gracias a que tenemos nuestro stateParams injectado podemos acceder a los parametros
            function ($stateParams, ShoppingListService) {
              return ShoppingListService.getItems()
                .then(function (items) {
                  // asi se accede a los parametros que vienen
                  return items[$stateParams.itemId];
                });
            }]
    }
  });
}

})();
