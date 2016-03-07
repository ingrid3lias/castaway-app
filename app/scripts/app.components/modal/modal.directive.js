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
      controllerAs: 'modal',
      controller: [ModalCtrl]
    };
  }
    function ModalCtrl () {
      var vm = this;
      
      
    // Toggle Modal Open/Closed
    vm.modalVisible = false;
    vm.toggleModal = function (event) {
      event.preventDefault();
      vm.modalVisible = !vm.modalVisible;
    };

    }
  
})();