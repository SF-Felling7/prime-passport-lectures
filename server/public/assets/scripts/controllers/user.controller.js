myApp.controller('UserController', ['$http', '$location', 'GetItem', function($http, $location, GetItem) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;

  console.log('checking user');

  // Upon load, check this user's session on the server
  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          vm.userName = response.data.username;
          console.log('User Data: ', vm.userName);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });

  vm.addItem = function () {
    console.log('in addItem');

    var itemObj ={
      username : vm.userName,
      description : vm.description,
      imgUrl : vm.imgUrl
  };//end add item

  $http({
    method : 'POST',
    url : '/user',
    data : itemObj
  }).then(function success(response){
    console.log( 'res:', response);
  });

};

vm.getAll = function(){
  GetItem.getItem().then(function(response){
    vm.shelf = response;
});
};

vm.getAll();


  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };
}]);
