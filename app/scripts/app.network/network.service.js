
(function () {
  angular
    .module('app.network')
    .factory('NetworkLookup', ['$resource', NetworkLookup]);

  function NetworkLookup ($resource) {
    return $resource(  'https://sheetsu.com/apis/3ec99887', {network_id: '@network_id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/3ec99887/network_id/:network_id',
          isArray: true
        }
      }
    );
  };
})();