(function () {
    "use strict";
    
    angular.module('common')
    .service('MyInfoService', MyInfoService);
    
    function MyInfoService(){
        var myinfo = this;
        myinfo.data = {};
        
        myinfo.guardar = (datos)=>{
            
            myinfo.data = datos;
            // console.log(datos)
        }

        myinfo.getdata = ()=>{
            return myinfo.data;
        }


    }

    
    
    
    })();
    