/**
Released under MIT and CC (https://creativecommons.org/licenses/by/4.0/) licenses
Copyright 2022 Carroll Bradford Inc. [https://dogood.carrollbradford.io/]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Supports both, Options & Composition API
 * Use to install mixins that can work with both APIs
 * @mixin installMixin
 * @param {Object} object Mixin object
 * @param {String} name Register name to be used as
 * @example import { installMixin } from './InstallMixin'; //import into your mixin
 * @example export default installMixin(ExportTableHelper (object constant), 'ExportTableHelper'); //exports your mixin
 * @returns {Object} Registration instance used by VUE
 */
export const installMixin = function (object, name) {
    return {
        install: (app, options) => {
            // Support for Options API
            _.forEach(object, function ($function, $key) {
                app.config.globalProperties[$key] = $function;
            });
            // Support for Composition API
            app.provide(name, object);
        },
    };
};
