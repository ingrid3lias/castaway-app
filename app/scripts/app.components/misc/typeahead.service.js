
(function () {
  angular
    .module('app.components')
    .factory('TypeAhead', ['$http', TypeAhead]);

  function TypeAhead ($http) {
    return {
    get: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data; // success callback returns this
      });
    }
  };
    
  };
})();