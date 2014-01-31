//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    function appendDom() {
      Ext.DomHelper.append('my-div', {
        id: 'url-list',
        tag: 'ul',
        cn: [
          {
            tag: 'li',
            cn: [{ tag: 'a', html: 'google', href: 'http://www.google.com' }]
          },
          {
            tag: 'li',
            cn: [{ tag: 'a', html: 'yahoo', href: 'http://www.yahoo.com', target: '_blank' }]
          }
        ]
      });
    };

    function overwriteDom() {
      Ext.DomHelper.overwrite('my-div', {
        id: 'url-list',
        tag: 'ul',
        cn: [
          {
            tag: 'li',
            cn: [{ tag: 'a', html: 'google', href: 'http://www.google.com' }]
          },
          {
            tag: 'li',
            cn: [{ tag: 'a', html: 'yahoo', href: 'http://www.yahoo.com', target: '_blank' }]
          }
        ]
      });
    }
    function before() {
      // Ext.DomHelper.insertBefore
    }

    function after() {
      // Ext.DomHelper.insertAfter
    }

    var myToolbar = Ext.create('Ext.Toolbar', {
      docked: 'top',
      title: '通过DomHelper组件追加元素',
      items: [
        {
          xtype: 'button',
          text: '追加元素',
          handler: function() {
            appendDom();
          }
        }
      ]
    });

    var myPanel = Ext.create('Ext.Panel', {
      id: 'myPanel',
      html: '<div id="my-div">Testing.....</div>',  // target div
      items: [myToolbar]
    });

    Ext.Viewport.add(myPanel);
  }
});
