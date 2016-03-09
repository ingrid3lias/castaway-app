
(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastReviews', ['$resource', PodcastReviews]);

  function PodcastReviews ($resource) {
    return $resource(  'https://sheetsu.com/apis/80fdd08d', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();