
contactApp.controller('CrearController', ['$scope', function($scope) {
  console.log("Esto Funciona");


  $scope.crear = function(){

    const name = $scope.nameInput;
    const ingre = $scope.ingreInput;
    var user = firebase.auth().currentUser;
    
    
    if(name && ingre){
        db.collection(user.email).doc(name).set({
          nombre: name,
          ingredientes: ingre,
        })
         .then(function(docRef){
             swal("Bien!","Contacto creado!","success");
             $scope.nameInput = undefined;
             $scope.ingreInput = undefined;
             $scope.$apply();
          })
          .catch(function(error){
            console.error(error);
             swal("Error","Problemas en base de datos!","error");

          });


    }else{
        swal("ATENCION", "Faltan diligenciar campos","warning");
    }


    

  }

}]);