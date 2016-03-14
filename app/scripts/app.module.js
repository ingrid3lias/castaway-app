(function () {
    
  angular.module('app.marketing', []);
  
  angular.module('app.components', []);
  
  angular.module('app.podcasts', []);
  
  angular.module('app.network', []);
  
  angular.module('app.user', []);
  
  angular.module('app.auth', []);
    
  // Define main module.
  angular.module('app', [
    'ngSanitize',
    'ngResource',
    'ui.router',
    'app.marketing',
    'app.components',
    'app.podcasts',
    'app.network',
    'app.user',
    'app.auth'
  ]);
})();

var app = angular.module('app');