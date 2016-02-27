(function () {
    
  angular.module('app.marketing', []);
  
  angular.module('app.components', []);
  
  angular.module('app.podcasts', []);
    
  // Define main module.
  angular.module('app', [
    'ngSanitize',
    'ngResource',
    'ui.router',
    'app.marketing',
    'app.components',
    'app.podcasts'
  ]);
})();

var app = angular.module('app');