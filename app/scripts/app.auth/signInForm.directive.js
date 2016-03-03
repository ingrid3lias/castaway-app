(function () {
  angular
    .module('app.components')
    .directive('caSignInForm', caSignInForm);

  function caSignInForm () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/auth/sign-in-form.html',
      controllerAs: 'signInForm',
      controller: [SignInFormCtrl]
    };

    function SignInFormCtrl () {
      var vm = this;
      
     

    }
  }
})();