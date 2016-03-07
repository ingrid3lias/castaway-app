(function () {
  angular
    .module('app.components')
    .directive('toggleClass', toggleClass);

  function toggleClass () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          element.toggleClass(attrs.toggleClass);
        });

        scope.removeToggleActive = function (){
          console.log('clicked toggle');
          element.removeClass(attrs.toggleClass);
        };

      }
    };
  }
})();