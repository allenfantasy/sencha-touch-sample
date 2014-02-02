//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    Ext.define('User', {
      extend: 'Ext.data.Model',
      config: {
        fields: ['firstName', 'lastName', 'role']
      }
    });

    var store = Ext.create('Ext.data.Store', {
      model: 'User',
      grouper: function(record) {
        return record.get('role');
      },
      data: [
        { firstName: '嘉豪', lastName: '利', role: 'bigbrother' },
        { firstName: '宏斌', lastName: '吴', role: 'bigbrother' },
        { firstName: '泽秋', lastName: '吴', role: 'programmer' },
        { firstName: '俊豪', lastName: '冼', role: 'designer' },
        { firstName: '东瑜', lastName: '蔡', role: 'designer' },
      ]
    });

    var myList = Ext.create('Ext.List', {
      store: store,
      itemTpl: '<div>{lastName}{firstName}</div>',
      grouped: true,
      //indexBar: true,
      //onItemDisclosure: function(record, element, index, e) {
        //Ext.Msg.alert("点击了" + store.getAt(index).get('lastName') + store.getAt(index).get('firstName'));
      //}
    });

    Ext.Viewport.add(myList);
  }
});
