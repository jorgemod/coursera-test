(function(){
    'use strict';

    angular.module('ShoppingList', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ListService',ListService);

    ToBuyController.$inject = ['ListService'];
    function ToBuyController(ListService){
        var tbuy = this;
        tbuy.items = [
            { name: "cookies", quantity: 10 },
            { name: "bananas", quantity: 9 },
            { name: "panqueques", quantity: 2 },
            { name: "pizza", quantity: 5 },
            { name: "pizza", quantity: 3 },
        ];

        tbuy.empty = false;

        tbuy.bought = (index)=>{
            console.log("compré",index);
            ListService.addItem(tbuy.items[index].name, tbuy.items[index].quantity);
            tbuy.items.splice(index,1);
            if(tbuy.items.length == 0){
                tbuy.empty = true;
            }
            
        };
    }
    AlreadyBoughtController.$inject = ['ListService','$scope'];
    function AlreadyBoughtController(ListService, $scope){
        var abought = this;
        
        abought.items = ListService.getItems();
        
        
        

    }

    function ListService(){
        var service = this;
        var items = [];
        

        service.addItem = function (itemName, quantity) {
            var item = {
              name: itemName,
              quantity: quantity
            };
            items.push(item);
          
        };
        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        };
        
        service.getItems = function () {
            return items;
        };
        
    }
})();