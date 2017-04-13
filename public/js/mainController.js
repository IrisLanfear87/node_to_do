angular.module('todo.mainController',[])  //ovo je dobra sintaksa za imenovanje kontrolera jer oslikava ko je glavni
.controller('mainCtrl', function ($scope,db) {
  // $scope.name = "Natalija"
  $scope.data = [];
  db.data.then(function (result) {
    $scope.data = result.data;
  }, function (err) {
    console.log(err);
  });
  $scope.addMsg = function () {
    db.insertNewTodo($scope.newMessage).then(function (result) {
      // console.log(result.data);
      $scope.data = result.data;
      $scope.newMessage =''
    })
  }
  $scope.deleteTodo = function (id) {
    db.deleteTodo(id).then(function (result) {
      console.log(result.data);
      $scope.data = result.data
    })
  }
})

//MONGO SVOJ ID NAZIVA OBJECT ID PA JE U NJEMU ID
