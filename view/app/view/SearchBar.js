// Create a custom SearchBor
Ext.define('MyView.view.SearchBar', {
  extend: 'Ext.Toolbar',
  xtype: 'searchbar',
  requires: ['Ext.field.Search'],

  config: {
    ui: 'searchbar',
    layout: 'vbox',
    cls: 'big',
    items: [
      {
        xtype: 'title',
        title: 'MyView Search'
      },
      {
        xtype: 'searchfield',
        placeholder: 'Search...'
      },
    ]
  }
});
