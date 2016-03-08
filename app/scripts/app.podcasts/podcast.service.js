(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastLookup', ['$resource', PodcastLookup]);

  function PodcastLookup ($resource) {
    return $resource(  'https://sheetsu.com/apis/3eaa67a7', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();
