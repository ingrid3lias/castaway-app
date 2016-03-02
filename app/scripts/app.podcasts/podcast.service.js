(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastLookup', ['$resource', PodcastLookup]);

  function PodcastLookup($resource) {
    return $resource(
      'http://itunes.apple.com/search?podcast', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();