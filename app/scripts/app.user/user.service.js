(function () {
  angular
    .module('app.user')
    .factory('UserReviews', ['$resource', UserReviews]);

  function UserReviews ($resource) {
    return $resource(  'https://sheetsu.com/apis/53891ecc', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();
