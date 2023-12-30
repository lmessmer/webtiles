var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_new_1 = new ol.layer.Tile({
            'title': 'new',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'file:///C:/SpatialData/Map Tiles/FortTilesTest/xzt/{z}/{x}/{y}.png'
            })
        });

        var lyr_tiletest_2 = new ol.layer.Tile({
            'title': 'tiletest',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://lmessmer.github.io/TestTiles/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_new_1.setVisible(true);lyr_tiletest_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_new_1,lyr_tiletest_2];
