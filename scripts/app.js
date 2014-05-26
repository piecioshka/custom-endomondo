/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Helper: endomondo.com
 */

/*global document, chrome */

(function () {
    'use strict';

    function Styles() {
        this.el = document.createElement('link');
        this.build();
    }

    Styles.STYLE_FILE = chrome.extension.getURL('styles/app.css');

    Styles.prototype = {
        build: function () {
            this.el.setAttribute('type', 'text/css');
            this.el.setAttribute('rel', 'stylesheet');
            this.el.setAttribute('media', 'print');
            this.el.setAttribute('href', Styles.STYLE_FILE);
        },

        render: function () {
            document.getElementsByTagName('head')[0].appendChild(this.el);
        }
    };

    // ------------------------------------------------------------------------

    var style = new Styles();
    style.render();

}());
