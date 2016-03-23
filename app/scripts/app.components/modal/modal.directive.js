(function () {
  angular
    .module('app.components')
    .directive('modal', modal);

  function modal() {
    return {
      restrict: 'E',
      scope: {
        modalId: '@',
        modalHeaderMessage: '@message'
      },
      replace: true,
      transclude: true,
      bindToController: true,
      templateUrl: '/views/components/modal/modal.html',
      controller: ['$rootScope', ModalCtrl],
      controllerAs: 'modalCtrl'
    }
  }

  function ModalCtrl($rootScope) {
    var vm = this;

    // Close modal by default
    vm.modalVisible = false;

    vm.toggleModal = function (event) {
      event.preventDefault();
      vm.modalVisible = !vm.modalVisible;

      // FIX ME: Remove Anuglar element when possible
       //angular.element('html').toggleClass('is-fixed', vm.modalVisible);
    };

    // Find modal to open based on modal's id
    $rootScope.$on('modal-control-event', modalControlEventHandler);

    function modalControlEventHandler(event, eventData) {
      if (!!eventData && eventData.id === vm.modalId) {
        var isModalVisible = eventData.event === 'open' ? true : false;

        vm.modalVisible = isModalVisible;

        // FIX ME: Remove Anuglar element when possible
//        angular.element('html').toggleClass('is-fixed', vm.modalVisible);

        // Request digest loop; for some reason this is necessary to
        // update the modalVisible value.
        $rootScope.$digest();
      }
    }
  }
})();
