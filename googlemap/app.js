//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox', 'Ext.Map'],

  launch: function() {
    var refresh = function(geo) {
      var mapdemo = Ext.ComponentManager.get('mapdemo');
      var latlng = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());

      mapdemo.setMapCenter(latlng);

      var infowindow = new google.maps.InfoWindow({
        content: '当前位置'
      });

      var marker = new google.maps.Marker({
        position: latlng,
        map: mapdemo.getMap()
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(mapdemo.getMap(), marker);
      });
    };

    var locationError = function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
      if (bTimeout) {
        Ext.Msg.alert('获取地图信息超时');
      } else {
        Ext.Msg.alert('获取地图信息失败');
      }
    }

    var mapdemo = new Ext.Map({
      id: 'mapdemo',
      useCurrentLocation: false,
      mapOptions: {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.DEFAULT
        }
      }
    });

    var toolbar = Ext.create('Ext.Toolbar', {
      docked: 'top',
      items: [{
        iconMask: true,
        iconCls: 'locate',
        handler: function() { mapdemo.getGeo().updateLocation(); }
      }]
    })

    var panel = Ext.create('Ext.Panel', {
      layout: 'fit',
      items: [toolbar, mapdemo]
    });

    var geo = Ext.create('Ext.util.Geolocation', {
      autoUpdate: false,
      timeout: 2000,
      listeners: {
        locationupdate: refresh,
        locationerror: locationError
      }
    });

    mapdemo.setGeo(geo);
    geo.updateLocation();
    Ext.Viewport.add(panel);
  }
});
