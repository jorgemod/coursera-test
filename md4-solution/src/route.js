(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
        // Home page
        $stateProvider
        // ojito con las rutas porque son absolutas
        .state('home', {
            url: '/',
            templateUrl: 'src/home/home.html'
        })
        .state('categories',{
            url: '/categories',
            templateUrl: 'src/categories/categories.html',
            controller: 'categoriesController as categories'
        })
        .state('item',{
            url: '/item/{id}',
            templateUrl: 'src/items/items.html',
            controller: 'ItemController as item',
            resolve: {
                items: ['menuDataService','$stateParams', function (menuDataService,$stateParams) {
                  return menuDataService.getItemsForCategory($stateParams.id);
                }]
            }
        })
    
    }
    
    })();
    