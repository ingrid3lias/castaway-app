(function () {
  angular
    .module('app.components')
    .directive('modalControl', ['$rootScope', modalControl]);

  function modalControl($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        var modalId = attr.modalId,
            modalEvent = !!attr.modalEvent ? attr.modalEvent : 'open';

        element.on('click', function (event) {
          if (!!event) { event.preventDefault(); }

          $rootScope.$emit('modal-control-event', {
            id: modalId,
            event: modalEvent
          });
        });
      }
    }
  }
})();
