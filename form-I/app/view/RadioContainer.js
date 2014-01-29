Ext.define('MyApp.view.RadioContainer', {
  extend: 'Ext.Container',
  alias: 'widget.RadioContainer',
  xtype: 'radiocontainer',

  config: {
    height: '25%',
    layout: {
      type: 'hbox'
    },
    items: [
      {
        xtype: 'label',
        flex: 1,
        html: '性别',
        style: 'text-align: center; position: relative; top: 25%;'
      },
      {
        xtype: 'container',
        flex: 3,
        defaults: {
          xtype: 'radiofield'
        }
        items: [
          {
            label: 'Male',
            value: 'male'
          }
          {
            label: 'Female',
            value: 'female'
          }
        ]
      }
    ]
  }
})
