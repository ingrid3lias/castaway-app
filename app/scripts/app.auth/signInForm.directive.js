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

    function SignInFormCtrl ($scope, modals) {
      var vm = this;
      
                
                // PUBLIC METHODS.
                // ---
                // Wire the modal buttons into modal resolution actions.
                $scope.close = modals.resolve;
                // I jump from the current alert-modal to the confirm-modal.
                $scope.jumpToPassword = function() {
                    // We could have used the .open() method to jump from one modal
                    // to the next; however, that would have implicitly "rejected" the
                    // current modal. By using .proceedTo(), we open the next window, but
                    // defer the resolution of the current modal until the subsequent
                    // modal is resolved or rejected.
                    modals.proceedTo(
                        "password"
                    )
                    .then(
                        function handleResolve() {
                            console.log( "Piped confirm resolved." );
                        },
                        function handleReject() {
                            console.warn( "Piped confirm rejected." );
                        }
                    );
                };
                $scope.jumpToSignUp = function() {
                    // We could have used the .open() method to jump from one modal
                    // to the next; however, that would have implicitly "rejected" the
                    // current modal. By using .proceedTo(), we open the next window, but
                    // defer the resolution of the current modal until the subsequent
                    // modal is resolved or rejected.
                    modals.proceedTo(
                        "sign-up"
                    )
                    .then(
                        function handleResolve() {
                            console.log( "Piped confirm resolved." );
                        },
                        function handleReject() {
                            console.warn( "Piped confirm rejected." );
                        }
                    );
                };
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