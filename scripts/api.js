'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joshuaarun';

  function getItems(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  }

  function createItem(name, callback) {
    const newItemString = JSON.stringify({name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItemString,
      success: callback
    });
  }

  function updateItem(id, updateData, callback){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  }

  return {
    getItems,
    createItem,
    updateItem
  };
})();
