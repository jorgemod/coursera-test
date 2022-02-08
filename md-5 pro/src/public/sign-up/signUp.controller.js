(function (){
    'use strict';

    angular.module('public')
    .controller('signUpController', signUpController);
    
    signUpController.$inject = ['MenuService','MyInfoService'];
    function signUpController(MenuService,MyInfoService){
        var signUp = this;
        signUp.fname = "";
        signUp.lname = "";
        signUp.email = "";
        signUp.fnumber = "";
        signUp.mnumber = "";
        signUp.response = "";
        signUp.success = true;



        signUp.submit = ()=>{
            console.log(signUp.fname,signUp.lname,signUp.email,signUp.mnumber,signUp.fnumber);
            MenuService.getMenuItem(signUp.mnumber).then(function(data ){
                console.log(data);
                signUp.response = "Your information has been saved";
                signUp.success = true;
                MyInfoService.guardar({
                    name: signUp.fname,
                    lname: signUp.lname,
                    email: signUp.email,
                    fnumber : signUp.fnumber,
                    item: {
                        picture: data.short_name,
                        name: data.name,
                        description: data.description
                    }
                    
                });

                
            }).catch(
                function(err){
                    console.log(err);
                    signUp.success = false;
                    signUp.response = "No such menu number exists";
                }
            )
        }

    }





})();