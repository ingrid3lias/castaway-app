
(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastStations', ['$resource', PodcastStations]);

  function PodcastStations ($resource) {
    return $resource(  'https://sheetsu.com/apis/877d034e', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();