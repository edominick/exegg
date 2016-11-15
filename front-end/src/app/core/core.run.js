(function() {
  'use strict';

  angular
    .module('myMessageFront.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, Angularytics) {

    $log.debug('runBlock end');

    Angularytics.init();

  }

})();
