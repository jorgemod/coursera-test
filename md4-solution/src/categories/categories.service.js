(function () {
    'use strict';
    
    angular.module('categoriesApp')
    .service('menuDataService',menuDataService);


    menuDataService.$inject = ['$q','$http']
    function menuDataService($q, $http){
        var service = this;


        service.getAllCategories = ()=>{
            var response = $http({
                method : 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            });


            return response;
        }
        
        service.getItemsForCategory = (category)=>{
            var response = $http({
                method : 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+category
            });
            
            return response;
        }
    }

    
})();
    