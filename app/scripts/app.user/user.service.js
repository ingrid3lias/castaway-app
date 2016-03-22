(function () {
  angular
    .module('app.user')
    .factory('UserLookup', ['$resource', UserLookup]);

  function UserLookup ($resource) {
    return $resource(  'https://sheetsu.com/apis/53891ecc', {user_id: '@id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/53891ecc/user_id/:user_id',
          isArray: true
        },
      }
    );
  };
})();
