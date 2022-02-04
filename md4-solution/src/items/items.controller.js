(function () {
    'use strict';
    
    angular.module('categoriesApp')
    .controller('ItemController', ItemController);
    
    
    ItemController.$inject = ['$stateParams','items'];
    function ItemController($stateParams,items) {
      var itemDetail = this;
      itemDetail.short_name = items.data.category.short_name;
      itemDetail.items = items.data.menu_items;

      
        
        console.log(items.data.category.short_name);
        console.log(items.data.menu_items);
        
      
    }
    
    })();
    