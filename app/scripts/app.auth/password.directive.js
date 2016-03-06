(function () {
  angular
    .module('app.components')
    .directive('caPasswordForm', caPasswordForm);

  function caPasswordForm () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/auth/password.html',
      controllerAs: 'passwordForm',
      controller: [PasswordFormCtrl]
    };

    function PasswordFormCtrl () {
      var vm = this;
      
     

    }
  }
})();