(function (){
    'use strict';

    angular.module('public')
    .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['MyInfoService','ApiPath'];
    function myInfoController(MyInfoService, ApiPath){
        var myinfo = this;
        myinfo.empty = true;
        myinfo.basePath = ApiPath; 
        myinfo.data = MyInfoService.getdata();
        console.log(myinfo.data)
        if( Object.entries(myinfo.data).length === 0 ){
            myinfo.empty = true;
        }
        else{
            myinfo.empty = false;
        }


    }
    



})();