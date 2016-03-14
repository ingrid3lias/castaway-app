
(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastLookup', ['$resource', PodcastLookup]);

  function PodcastLookup ($resource) {
    return $resource(  'https://sheetsu.com/apis/3eaa67a7/', {podcast_id: '@podcast_id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/3eaa67a7/podcast_id/:podcast_id',
          isArray: true
        }
      }
    );
  };
})();