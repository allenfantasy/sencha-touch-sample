//@charset=utf-8
Ext.application({
  name: 'VC',

  views: ['Main', 'About'],
  controllers: ['Main', 'About'],

  launch: function() {
  	// Destroy the #appLoadingIndicator element
    Ext.fly('appLoadingIndicator').destroy();

    // Initialize the main view
    Ext.Viewport.add(Ext.create('VC.view.Main'));
  },

  onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
