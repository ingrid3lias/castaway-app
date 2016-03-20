
(function () {
  angular
    .module('app.podcasts')
    .factory('AnnouncementList', ['$resource', AnnouncementList]);

  function AnnouncementList ($resource) {
    return $resource(  'https://sheetsu.com/apis/c413f514', {podcast_id: '@id', network_id: '@id'},
      {
        'query': {
          method: 'GET',
          isArray: false
        },
        'get': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/c413f514/podcast_id/:podcast_id',
          isArray: true
        },
        'getNetwork': {
          method: 'GET',
          url: 'https://sheetsu.com/apis/v1.0/c413f514/network_id/:network_id',
          isArray: true
        },
      }
    );
  };
})();