(function () {
  angular
    .module('app.components')
    .directive('typeAhead', typeAhead);

  function typeAhead ($timeout) {
    return {
      restrict: 'AEC',
      scope: {
        items: '=',
        prompt: '@',
        title: '@',
        subtitle: '@',
        model: '=',
        onSelect: '&amp;'
      },
      link: function(scope, elem, attrs) {
          scope.handleSelection = function(selectedItem) {
          scope.model = selectedItem;
          scope.current = 0;
          scope.selected = true;
          $timeout(function() {
          scope.onSelect();
          }, 200);
        };
        scope.current = 0;
        scope.selected = true; // hides the list initially
        scope.isCurrent = function(index) {
          return scope.current == index;
          };
        scope.setCurrent = function(index) {
        scope.current = index;
        };
      },
      templateUrl: 'views/components/misc/_search-function.html',
      controller: ['$scope', TypeAheadCtrl]
    }

    function TypeAheadCtrl ($scope, dataFactory) {
      var vm = this;
      
       // DI in action
      dataFactory.get('states.json').then(function(data) {
      $scope.items = data;
        });
      $scope.name = ''; // This will hold the selected item
      $scope.onItemSelected = function() { // this gets executed when an item is selected
      console.log('selected=' + $scope.name);
      };
      
    }
  }

})();