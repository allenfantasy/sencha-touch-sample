Ext.define('User', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      { name: 'id', type: 'int' },
      { name: 'name', type: 'string' }
    ],
    proxy: {
      type: 'rest',
      url: 'data/users',
      reader: {
        type: 'json',
        root: 'users'
      }
    }
  }
});
