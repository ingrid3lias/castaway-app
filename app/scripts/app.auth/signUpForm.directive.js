(function () {
  angular
    .module('app.components')
    .directive('caSignUpForm', caSignUpForm);

  function caSignUpForm () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/auth/sign-up-form.html',
      controllerAs: 'signUpForm',
      controller: [SignUpFormCtrl]
    };

    function SignUpFormCtrl () {
      var vm = this;
      

    }
  }
})();