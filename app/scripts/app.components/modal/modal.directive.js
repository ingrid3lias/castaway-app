(function () {
  angular
    .module('app.components')
    .directive('modal', modal);

  function modal () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      bindToController: true,
      templateUrl: 'views/components/modal/modal.html',
      controllerAs: 'modalCtrl',
      controller: [ModalCtrl]
    };
  }
    function ModalCtrl ($scope, modals) {
      var vm = this;
      
      // Toggle Modal Open/Closed
      //vm.modalVisible = false;
      //vm.toggleModal = function (event) {
      //  event.preventDefault();
      //  vm.modalVisible = !vm.modalVisible;
      //};
      
      // I open an Alert-type modal.
                $scope.signIn = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "sign-in"
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Alert resolved." );
                        },
                        function handleReject( error ) {
                            console.warn( "Alert rejected!" );
                        }
                    );
                };
                // I open a Confirm-type modal.
                $scope.signUp = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "sign-up"
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Confirm resolved." );
                        },
                        function handleReject( error ) {
                            console.warn( "Confirm rejected!" );
                        }
                    );
                };
                // I open a Prompt-type modal.
                $scope.passwordForgotten = function() {
                    // The .open() method returns a promise that will be either
                    // resolved or rejected when the modal window is closed.
                    var promise = modals.open(
                        "password"
                    );
                    promise.then(
                        function handleResolve( response ) {
                            console.log( "Prompt resolved with [ %s ].", response );
                        },
                        function handleReject( error ) {
                            console.warn( "Prompt rejected!" );
                        }
                    );
                };
      
    }
  
})();



