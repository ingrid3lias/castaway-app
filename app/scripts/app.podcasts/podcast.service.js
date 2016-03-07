(function () {
  angular
    .module('app.podcasts')
    .factory('PodcastLookup', ['$resource', PodcastLookup]);

  function PodcastLookup($resource) {
    return $resource(
      'https://spreadsheets.google.com/feeds/list/1hH6H6di5gnt9asnrK6J_h3dqPxat6ohnGpWVPJ9vO7c/od6/public/values?alt=json', {
        query: '@query'
      },{
        search: {
          method: 'GET',
          params: {
            action: "search",
            query: '@query'
          }
        }
        }
    );
  };
})();