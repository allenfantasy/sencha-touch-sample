//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    var segmentedButton = Ext.create('Ext.SegmentedButton', {
      //allowMultiple: true,
      //allowMultiple: false,
      items: [
        { text: '按钮一' },
        { text: '按钮二' },
        { text: '按钮三' },
      ],
      listeners: {
        toggle: function(container, button, pressed) {
          if(pressed) {
            console.log("用户按下了 '" + button.getText() + "' 按钮");
          } else {
            console.log("用户松开了 '" + button.getText() + "' 按钮");
          }
        }
      }
    })
    var myToolbar1 = Ext.create('Ext.Toolbar', {
      id: 'mytoolbar1',
      docked: 'top',
      defaults: { type: 'button' },
      //layout: {
        //type: 'hbox',
        //pack: 'center',
      //},
      //items: [segmentedButton],
      //items: [
        //{
          //ui: 'action',
          //text: '按钮一'
        //},
        //{
          //ui: 'confirm-round',
          //text: '按钮二'
        //},
        //{
          //ui: 'decline',
          //text: '按钮三'
        //},
        //{
          //ui: 'decline-small',
          //text: '按钮四'
        //},
      //]
      items: [
        //{
          //xtype: 'spacer',
          //width: 10
        //},
        { iconCls: 'home', text: '首页', },
        { iconCls: 'info', text: '信息' },
        { iconCls: 'download', text: '下载' },
        { iconCls: 'favorites', text: '喜欢' },
        { iconCls: 'user', text: '用户' },
        { iconCls: 'bookmarks', text: '书签' },
        { iconCls: 'action', text: '行动' },
        { iconCls: 'add', text: '添加' },
        { iconCls: 'delete', text: '删除' },

        //{
          //xtype: 'spacer',
          //width: 100
        //},
        //{
          //xtype: 'button',
          //iconCls: 'mail',
          //text: '邮件',
          //badgeText: '您有新邮件'
        //},
      ]
    });
    var myToolbar2 = Ext.create('Ext.Toolbar', {
      id: 'mytoolbar2',
      docked: 'bottom',
      defaults: { type: 'button' },
      items: [
        { iconCls: 'compose', text: '制作' },
        { iconCls: 'more', text: '更多' },
        { iconCls: 'reply', text: '回复' },
        { iconCls: 'search', text: '搜索' },
        { iconCls: 'settings', text: '设置' },
        { iconCls: 'star', text: '星星' },
        { iconCls: 'team', text: '团队' },
        { iconCls: 'time', text: '时间' },
        { iconCls: 'trash', text: '回收' },
      ]
    });
    var myPanel = Ext.create('Ext.Panel', {
      id: 'mypanel',
      items: [myToolbar1, myToolbar2],
      html: '测试面板'
    });
    Ext.Viewport.add(myPanel);
  }
});
