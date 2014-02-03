Ext.define('VC.controller.Main', {
	extend: 'Ext.app.Controller',
	/*init: function() {
		Ext.Msg.alert('控制器测试', 'Main控制器被调用');
	},*/
	config: {
		refs: {
			mainview: { // main view
				selector: 'mainview',
				xtype: 'mainview',
				autoCreate: true
			},
			AboutButton: '#AboutButton'
		},
		control: {
			AboutButton: {
				tap: 'showAboutView' // callback function
			},
		},
		routes: {
			'main': 'showMainView'
		}
	},
	showAboutView: function() {
		this.redirectTo('about');
	},
	showMainView: function() {
		Ext.Viewport.setActiveItem(this.getMainview());
	}
});