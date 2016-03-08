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

    function PasswordFormCtrl ($scope, modals) {
      var vm = this;
 
      // PUBLIC METHODS.
      // ---
      // Wire the modal buttons into modal resolution actions.
      $scope.cancel = modals.reject;
      // I process the form submission.
      $scope.submit = function() {
      // If no input was provided, show the user an error message.
        if ( ! $scope.form.input ) {
            return( $scope.errorMessage = "Please provide something!" );
            }
        modals.resolve( $scope.form.input );
        };

    }
  }
})();