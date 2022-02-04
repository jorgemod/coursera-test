(function (){
    'use strict';


    angular.module('categoriesApp')
    .controller('categoriesController', CategoriesController);

    CategoriesController.$inject = ['menuDataService'];
    function CategoriesController(menuDataService){
        var categories = this;
        categories.lista = [];
        menuDataService.getAllCategories().then(function (items){
            console.log(items.data);
            items.data.forEach(item => {
                
                categories.lista.push({
                    name: item.name,
                    short_name: item.short_name
                })
            });
        });


        categories.getItem = (index)=>{
            console.log(index +"desde controller")
        }


        
        


    }

})();