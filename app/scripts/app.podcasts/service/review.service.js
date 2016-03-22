
(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastReviews', ['$resource', PodcastReviews]);

  function PodcastReviews ($resource) {
    return $resource(  'https://sheetsu.com/apis/80fdd08d', {podcast_id: '@id', network_id: '@id', user_id: '@id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/80fdd08d/podcast_id/:podcast_id',
          isArray: true
        },
        'getNetwork': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/80fdd08d/network_id/:network_id',
          isArray: true
        },
        'getUser': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/80fdd08d/user_id/:user_id',
          isArray: true
        },
      }
    );
  };
})();