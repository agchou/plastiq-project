angular.module('ngPlacesAutocomplete', [])
  .directive('ngPlacesAutocomplete', function () {
    return {
      restrict: 'A',
      scope: {
        onComplete: '&onComplete'
      },

      link: function (scope, element, attrs, controller) {

        // Default Values

        scope.submit = false;
        scope.completed = false;
        scope.result;

        // Initiate autocomplete

        var autocomplete = new google.maps.places.Autocomplete(element[0], {});

        // Listener for place selection

        google.maps.event.addListener(autocomplete, 'place_changed', function () {

          scope.result = autocomplete.getPlace();

          // If enter key was pressed before select and place was selected, applyOnComplete
          // Prevents error when place selected and user moves away from input field

          if (scope.submit) {

            applyOnComplete({ data: scope.result });
            scope.submit = false;

          } else {

            scope.completed = true;

          }
        });

        element.on('keydown', function (e) {

          if (e.keyCode === 13) {

            if (scope.completed) {

              applyOnComplete({ data: scope.result });
              scope.completed = false;

            } else {

              scope.submit = true;

            }

            e.preventDefault();
          }
        })

        function applyOnComplete(data) {

          // Google.autocomplete by default applies result after 'blur' event.
          // This overrides preventing the result to be entered into input after
          // enter is pushed.

          element.one('blur', function () {
            element.val('');
          })

          scope.onComplete(data);

          scope.$apply();
        }
      }
    };
  })
