//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    var calcData = function() {
      var data = [];
      var item = [];
      for (var i = 0; i < 30; i++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        item = {
          id: i,
          rgb: Ext.util.Format.format('rgb({0}, {1}, {2})', r, g, b)
        };
        data[i] = item;
      }
      return data;
    };

    var initData = calcData();
    var store = Ext.create('Ext.data.Store', {
      data: initData,
      fields: ['id', 'rgb'],
      sorters: [
        {
          property: 'rgb',
          direction: 'asc',
          transform: function(value) {
            var rgb = value.slice(4, -1).split(', ');
            return rgb[0];
          }
        },
        {
          property: 'rgb',
          direction: 'asc',
          transform: function(value) {
            var rgb = value.slice(4, -1).split(', ');
            return rgb[1];
          }
        },
        {
          property: 'rgb',
          direction: 'asc',
          transform: function(value) {
            var rgb = value.slice(4, -1).split(', ');
            return rgb[2];
          }
        }
      ]
    });

    var dataViewTpl = new Ext.XTemplate(
      '<tpl for=".">',
      '<div class="paul">',
        '<div style="background:{rgb}; width: 100%; height: 15px; color: #EEE; font-size: small;">',
        '</div>',
      '</div>',
      '</tpl>'
    );

    var myToolbar = Ext.create('Ext.Toolbar', {
      docked: 'top',
      items: [
        {
          text: '改变颜色',
          handler: function() {
            var newData = calcData();
            store.setData(newData);
          }
        }
      ]
    });

    var myPanel = Ext.create('Ext.Panel', {
      id: 'myPanel',
      items: [
        myToolbar,
        {
          xtype: 'dataview',
          itemTpl: dataViewTpl,
          store: store,
          height: 350
        }
      ]
    });
    Ext.Viewport.add(myPanel);
  }
});
