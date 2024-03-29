/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

(function() {
  'use strict';

  class CallbackExtension extends window.Extension {
    constructor() {
      super('netatmo-energy-adapter');

      if (!window.Extension.prototype.hasOwnProperty('load')) {
        this.load();
      }
    }

    load() {
      this.content = '';
      return fetch(`/extensions/${this.id}/src/views/callback.html`)
        .then((res) => res.text())
        .then((text) => {
          this.content = text;
        })
        .catch((e) => console.error('Failed to fetch content:', e));
    }

    show() {
      this.view.innerHTML = this.content;

      const queryParams = new URLSearchParams(window.location.search);
      const queryData = Object.fromEntries(queryParams.entries());

      window.API.postJson(`/extensions/${this.id}/api/callback`, queryData)
        .then(() => {
          const status = document.querySelector('#status');
          status.innerHTML = "<h1>Done! You may close this tab now.</h1>";
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  new CallbackExtension();
})();
