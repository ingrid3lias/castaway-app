(function () {
    
  angular.module('app.marketing', []);
  
  angular.module('app.components', []);
  
  angular.module('app.podcasts', []);
  
  angular.module('app.user', []);
    
  // Define main module.
  angular.module('app', [
    'ngSanitize',
    'ngResource',
    'ui.router',
    'app.marketing',
    'app.components',
    'app.podcasts',
    'app.user'
  ]);
})();

var app = angular.module('app');