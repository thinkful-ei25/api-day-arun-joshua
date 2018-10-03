'use strict';
/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.fetchInitialItems();
  shoppingList.render(); 
});



