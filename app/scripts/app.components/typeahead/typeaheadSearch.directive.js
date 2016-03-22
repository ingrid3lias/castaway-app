(function () {
  angular
    .module('app.components')
    .directive('caTypeaheadSearch', caTypeaheadSearch);

  function caTypeaheadSearch () {
    return {
      restrict: 'E',
      templateUrl: 'views/components/typeahead/typeahead-search.html',
      controller: ['$scope', 'PodcastLookup', TypeaheadSearchCtrl]
    };

    function TypeaheadSearchCtrl ($scope, PodcastLookup) {

      //Typeahead search
      function podcastTokenizer(podcast) {
        var rawTokens = podcast.podcast_title.split(/\s+/),
          tokens = [],
          tokenSearch = /([\w-\.]+)/,
          searchResults;

        // Iterate over tokens, and strip out any parenthesis.
        rawTokens.forEach(function (token, index) {
          if (tokenSearch.test(token)) {
            searchResults = tokenSearch.exec(token);
            tokens.push(searchResults[1]);
          }
        });

        return tokens;
      };

      var podcastLookup = new Bloodhound({
        datumTokenizer: podcastTokenizer,
        // datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        identify: function(datum) {
          return datum.podcast_id;
        }
      });


      // Typeahead options object
      $scope.podcastLookupOptions = {
        highlight: true,
        limit: 10
      };

      // Create Bloodhound dataset.
      $scope.podcastData = {
        displayKey: 'podcast_title',
        source: podcastLookup.ttAdapter(),
        limit: 15,
        template: '<a ui-sref="#">title</a>'
      };


      PodcastLookup.query().$promise
        .then(function(response) {
          var updatedPodcasts = response.result;

          // Pre-populate bloodhound with these results.
          podcastLookup.add(updatedPodcasts);

          // With "local" data populated, initialize the typeahead.
          podcastLookup.initialize();
        });

    }
  }
})();