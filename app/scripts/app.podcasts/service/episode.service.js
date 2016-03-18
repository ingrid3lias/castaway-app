
(function () {
  angular
    .module('app.podcasts')
    .factory('EpisodeLookup', ['$resource', EpisodeLookup]);

  function EpisodeLookup ($resource) {
    return $resource(  'https://sheetsu.com/apis/af975a75', {podcast_id: '@id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/af975a75/podcast_id/:podcast_id',
          isArray: true
        },
      }
    );
  };
})();