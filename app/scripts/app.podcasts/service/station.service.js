
(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastStations', ['$resource', PodcastStations]);

  function PodcastStations ($resource) {
    return $resource(  'https://sheetsu.com/apis/877d034e', {podcast_id: '@id', network_id: '@id', user_id: '@id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/877d034e/podcast_id/:podcast_id',
          isArray: true
        },
        'getNetwork': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/877d034e/network_id/:network_id',
          isArray: true
        },
        'getUser': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/877d034e/user_id/:user_id',
          isArray: true
        },
      }
    );
  };
})();