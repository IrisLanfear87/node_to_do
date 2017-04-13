angular.module('todo.dbService',[])
.service('db', function ($http) {
  this.data = $http({
    method : "get",
    url :"/getData"
  })
  this.insertNewTodo = function (msg) {
    // console.log(msg);
return  $http({  //bitno je ovo return jer onda drugde na nesto sto je vraceno moze da se chainuje, tj ako funkcija nesto returnuje, na poziv te f-je negde drugde ti mozes da chainujes nesto
    method :"post",
    url : "/insertTodo",
    data : {newMsg : msg}
  })
}
this.deleteTodo = function (id) {
  return $http({
    method : "post",
    url : "/deleteTodo",
    data : {id :id}
  })
}
})


//istrazi mean stack
//vrlo je bitno za node to brzo uklanjanje i posvljivanje elemenata, mnogo brze sa nodom i mongom nego sa php-om, jer nema refresa
