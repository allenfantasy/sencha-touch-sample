// as before
Ext.define('MyView.view.MyView', {
  extend: 'Ext.Panel',

  config: {
    border: 0
  },

  applyBorder: function(value) {
      return value + "px solid red";
  },

  updateBorder: function (newValue, oldValue) {
    this.element.setStyle('border', newValue);
  }
});
