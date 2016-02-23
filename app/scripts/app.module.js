(function () {
    
  angular.module('app.marketing', []);
  
  angular.module('app.components', []);
    
  // Define main module.
  angular.module('app', [
    'ngSanitize',
    'ngResource',
    'ui.router',
    'app.marketing',
    'app.components'
  ]);
})();

var app = angular.module('app');