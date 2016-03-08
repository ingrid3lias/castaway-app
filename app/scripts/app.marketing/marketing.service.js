(function () {
  angular
    .module('app.marketing')
    .factory('TopPodcasts', ['$resource', TopPodcasts]);

  function TopPodcasts ($resource) {
    return $resource(  'https://sheetsu.com/apis/f8d6a610', {},
      {
        'query': {
          method: 'GET',
          isArray: false
        }
      }
    );
  };
})();
