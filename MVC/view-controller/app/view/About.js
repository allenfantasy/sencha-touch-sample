Ext.define('VC.view.About', {
	extend: 'Ext.Panel',
	xtype: 'aboutview',
	config: {
		id: 'aboutview',
		fullscreen: true,
		html: '我是about视图',
		items: [
			{
				id: 'toolbar_about',
				docked: 'top',
				xtype: 'toolbar',
				items: [
					{
						xtype: 'button',
						id: 'MainButton',
						text: '切换到主视图'
					}
				]
			}
		]
	}
});