myApp.service('GetItem', function ($http) {
  console.log('in GetItem service');

  this.getItem = function (){
    return $http({
      method : 'GET',
      url: '/showItems'
    }).then(function success(response) {
      console.log( 'back from server with:', response );
      console.log( 'response and data',response.data);
      return response.data;
    }, function failure(response){
      console.log(response);
    });
  };
});
