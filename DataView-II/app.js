//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.MessageBox', 'Ext.data.reader.Json', 'Ext.dataview.DataView'],

  launch: function() {
    Ext.define('UserInfo', {
      extend: 'Ext.data.Model',
      config: {
        fields: ['username', 'gender', 'email', 'password', 'age', 'hobby', 'career']
      }
    });

    var userReader = Ext.create('Ext.data.reader.Json', {
      type: 'json',
      rootProperty: 'users',
      totalPropery: 'userCount'
    });

    var pageCount;
    var userStore = Ext.create('Ext.data.Store', {
      autoLoad: true,
      model: 'UserInfo',
      proxy: {
        type: 'ajax',
        url: 'http://localhost:9292/users',
        reader: 'userReader'
      },
      pageSize: 5,
      scope: this,
      listeners: {
        load: function(store, records, successful, operation) {
          if (!successful) {
            Ext.Msg.alert(
              this.getProxy().getReader().rawData.message
            );
          } else {
            var recordCount = userReader.rawData[userReader.getTotalProperty()];
            var pageSize = this.getPageSize();
            pageCount = (recordCount - recordCount % pageSize) / pageSize;
            if (recordCount % pageSize > 0) pageCount += 1;
            Ext.getCmp('pageInfo').setText(
              String(this.currentPage) + "/" + pageCount + "页"
            );
          }
        }
      }
    });

    var toolbar = Ext.create('Ext.Toolbar', {
      docked: 'bottom',
      width: '100%',
      layout: {
        type: 'hbox',
        pack: 'center',
      },
      items: [
        {
          iconMask: true,
          iconCls: 'firstpage',
          handler: function() {
            userStore.loadPage(1);
          }
        },
        {
          iconMask: true,
          iconCls: 'arrow_left',
          handler: function() {
            if (userStore.currentPage > 1) {
              userStore.previousPage();
            }
          }
        },
        {
          iconMask: true,
          iconCls: 'arrow_right',
          handler: function() {
            if (userStore.currentPage < pageCount) {
              userStore.nextPage();
            }
          }
        },
        {
          iconMask: true,
          iconCls: 'lastpage',
          handler: function() {
            userStore.loadPage(pageCount);
          }
        },
        {
          html: '',
          style: 'font-size: 16px',
          id: 'pageInfo'
        }
      ]
    });

    var userTemplate = new Ext.XTemplate(
      '<tpl for=".">',
        '<div class="user">',
          '<p>Username: {username}</p>',
          '<p>Career: {career}</p>',
        '</div>',
      '</tpl>'
    );

    var dataview = Ext.create('Ext.DataView', {
      store: userStore,
      items: toolbar,
      itemTpl: userTemplate,
      emptyText: '没有数据',
      baseCls: 'user'
    });

    Ext.Viewport.add(dataview);
  }
});
