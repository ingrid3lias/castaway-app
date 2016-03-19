
(function () {
  angular
    .module('app.network')
    .factory('PodcastList', ['$resource', PodcastList]);

  function PodcastList ($resource) {
    return $resource(  'https://sheetsu.com/apis/3eaa67a7/', {network_id: '@network_id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/3eaa67a7/network_id/:network_id',
          isArray: true
        },
      }
    );
  };
})();