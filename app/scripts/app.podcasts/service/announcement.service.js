
(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastAnnouncements', ['$resource', PodcastAnnouncements]);

  function PodcastAnnouncements ($resource) {
    return $resource(  'https://sheetsu.com/apis/c413f514', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();