angular.module('spotit').factory('Tickets', ['$firebaseArray',  function($firebaseArray) {
  var itemsRef = new Firebase("https://milkcandemo.firebaseio.com/tickets");
  return $firebaseArray(itemsRef);
}]);