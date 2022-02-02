(function (){
    'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    
    .directive('foundItems', FoundItems);



    
// directiva personalizada
function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'narrow',
      bindToController: true
    };
  
    return ddo;
  }

function FoundItemsController(){
    var fitems = this;
}


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var narrow = this;
        narrow.searchTerm ="";
        narrow.findedlist = [];
        narrow.status = false;


        narrow.delete = (index)=>{
            narrow.findedlist.splice(index,1);
        }



        narrow.search = ()=>{
            
            if(narrow.searchTerm != ""){

                var promise = MenuSearchService.getMatchedMenuItems();
                promise.then( function (response){
                    console.log(response.data);
                    response.data.menu_items.forEach(element => {

                            if( element.description.toLowerCase().indexOf(narrow.searchTerm) !== -1)
                            {
                                console.log(element);
                                narrow.findedlist.push(element);
                                narrow.status = false;
                            }
                        
                        
                        
                    });
                    if(narrow.findedlist.length == 0){
                        narrow.status = true;

                    }
                    
                    // console.log("lo que se encontró fue esto:"+narrow.findedlist[1].name);
                    
                    
                }).catch(function (error){
                    console.log(error);
                });
            }   
            else{
                narrow.status = true;
                

            }
        }

        
    }



    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http,ApiBasePath){
        var service = this;

        service.getMatchedMenuItems = ()=>{
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
              });
          
              return response;
        }

    }



})();