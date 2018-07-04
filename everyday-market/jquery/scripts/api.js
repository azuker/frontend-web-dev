'use-strict';

(function (window) {
  const ns = window.api = window.api || {};

  // EDIT the URL with the the address of your REST API
  const baseUrl = 'http://localhost/api';

  function getApiAction(action, parameters = null) {
    const p = !parameters ? null : `?${Object.keys(parameters).map(k => `${k}=${parameters[k]}`).join('&')}`;
    return `${baseUrl}/${action}${p}`;
  }

  ns.getProducts = function (category, callback) {
    return $.getJSON(getApiAction('products', { category }), callback);
  }

  ns.getCategories = function (callback) {
    return $.getJSON(getApiAction('categories'), callback);
  }
})(window);