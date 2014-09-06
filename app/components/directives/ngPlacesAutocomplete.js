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
        scope.running = false;
        scope.result = null;

        scope.form = element.parent();

        // Initiate autocomplete

        var autocomplete = new google.maps.places.Autocomplete(element[0], {});

        // Listener for place selection

        google.maps.event.addListener(autocomplete, 'place_changed', function () {

          scope.running = true;
          scope.result = autocomplete.getPlace();

          // If enter key was pressed before select and place was selected, applyOnComplete
          // Prevents error when place selected and user moves away from input field

          if (scope.submit) {

            applyOnComplete(scope.result || {});
          } else {

            scope.completed = true;
          }

          scope.running = false;
        });

        // Override form submit event

        scope.form.bind('submit', function (e) {

          scope.submit = true;

          // Hack for Google.autocomplete to start and/or finish

          setTimeout(function () {

            if (!scope.running) {

              applyOnComplete(scope.result || {});
            }
          }, 200)
        })

        function applyOnComplete(data) {

          // Google.autocomplete by default applies result after 'blur' event.
          // This overrides preventing the result to be entered into input after
          // enter is pushed.

          element.one('blur', function (e) {

            // Hack around if user submits with enter key, does not shift focus, enters new object,
            // and submits with click. Unlikely but possible.

            if (!e.relatedTarget || !e.relatedTarget.classList.contains("payee-input-submit")) {

              element.val('');
            }
          });

          if (!data.name) {

            data.name = element.val();
          }

          scope.onComplete({ data: data });

          scope.completed = false;
          scope.submit = false;
          scope.result = null;

          scope.$apply();

          setTimeout(function () {
            element.val('');
          }, 0)
        }
      }
    };
  })
