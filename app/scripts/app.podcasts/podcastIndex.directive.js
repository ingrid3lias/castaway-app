(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastIndex', caPodcastIndex);

  function caPodcastIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-index.html',
      controllerAs: 'podcastIndex',
      controller: ['PodcastLookup', PodcastIndexCtrl]
    };

    function PodcastIndexCtrl (PodcastLookup) {
      var vm = this;
      
      
//      vm.podcasts  = [
//        
//        {
//          id: '1',
//          podcast_title: 'Hello World',
//          podcast_author: 'Kurt Cunningham',
//          podcast_url: 'http://foobar.com'
//        },
//        {
//          id: '2',
//          podcast_title: 'Foo bar',
//          podcast_author: 'Kurt Cunningham',
//          podcast_url: 'http://foobar.com'
//        },
//        
//      ];
      
      
       vm.podcasts = PodcastLookup.query();

    }
  }
})();
