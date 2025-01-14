var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_VMap2002_2 = new ol.format.GeoJSON();
var features_VMap2002_2 = format_VMap2002_2.readFeatures(json_VMap2002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMap2002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMap2002_2.addFeatures(features_VMap2002_2);
var lyr_VMap2002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMap2002_2, 
                style: style_VMap2002_2,
                popuplayertitle: 'VMap 2002',
                interactive: false,
                title: '<img src="styles/legend/VMap2002_2.png" /> VMap 2002'
            });
var format_Mapahistoryczna1940_3 = new ol.format.GeoJSON();
var features_Mapahistoryczna1940_3 = format_Mapahistoryczna1940_3.readFeatures(json_Mapahistoryczna1940_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapahistoryczna1940_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapahistoryczna1940_3.addFeatures(features_Mapahistoryczna1940_3);
var lyr_Mapahistoryczna1940_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapahistoryczna1940_3, 
                style: style_Mapahistoryczna1940_3,
                popuplayertitle: 'Mapa historyczna 1940',
                interactive: false,
                title: '<img src="styles/legend/Mapahistoryczna1940_3.png" /> Mapa historyczna 1940'
            });
var format_Sentinel2024_4 = new ol.format.GeoJSON();
var features_Sentinel2024_4 = format_Sentinel2024_4.readFeatures(json_Sentinel2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel2024_4.addFeatures(features_Sentinel2024_4);
var lyr_Sentinel2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel2024_4, 
                style: style_Sentinel2024_4,
                popuplayertitle: 'Sentinel 2024',
                interactive: false,
                title: '<img src="styles/legend/Sentinel2024_4.png" /> Sentinel 2024'
            });
var format_AnalizahistorycznazSentinel_5 = new ol.format.GeoJSON();
var features_AnalizahistorycznazSentinel_5 = format_AnalizahistorycznazSentinel_5.readFeatures(json_AnalizahistorycznazSentinel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizahistorycznazSentinel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizahistorycznazSentinel_5.addFeatures(features_AnalizahistorycznazSentinel_5);
var lyr_AnalizahistorycznazSentinel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizahistorycznazSentinel_5, 
                style: style_AnalizahistorycznazSentinel_5,
                popuplayertitle: 'Analiza historyczna z Sentinel',
                interactive: false,
    title: 'Analiza historyczna z Sentinel<br />\
    <img src="styles/legend/AnalizahistorycznazSentinel_5_0.png" /> -100 - -62<br />\
    <img src="styles/legend/AnalizahistorycznazSentinel_5_1.png" /> -62 - -20<br />\
    <img src="styles/legend/AnalizahistorycznazSentinel_5_2.png" /> -20 - 10<br />\
    <img src="styles/legend/AnalizahistorycznazSentinel_5_3.png" /> 10 - 40<br />\
    <img src="styles/legend/AnalizahistorycznazSentinel_5_4.png" /> 40 - 73<br />\
    <img src="styles/legend/AnalizahistorycznazSentinel_5_5.png" /> 73 - 100<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Positron_1.setVisible(false);lyr_VMap2002_2.setVisible(true);lyr_Mapahistoryczna1940_3.setVisible(true);lyr_Sentinel2024_4.setVisible(true);lyr_AnalizahistorycznazSentinel_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positron_1,lyr_VMap2002_2,lyr_Mapahistoryczna1940_3,lyr_Sentinel2024_4,lyr_AnalizahistorycznazSentinel_5];
lyr_VMap2002_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'obwód': 'obwód', 'powierzc_1': 'powierzc_1', 'wsp': 'wsp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Mapahistoryczna1940_3.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Obwód': 'Obwód', 'Powierzchn': 'Powierzchn', 'Wsp': 'Wsp', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Sentinel2024_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'obwód': 'obwód', 'powierzch': 'powierzch', 'wsp': 'wsp', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_AnalizahistorycznazSentinel_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'GRID_ID': 'GRID_ID', 'proc_a': 'proc_a', 'proc_b': 'proc_b', 'proc_c': 'proc_c', 'a_b': 'a_b', 'b_c': 'b_c', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_VMap2002_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'obwód': 'TextEdit', 'powierzc_1': 'TextEdit', 'wsp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mapahistoryczna1940_3.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Obwód': 'TextEdit', 'Powierzchn': 'TextEdit', 'Wsp': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sentinel2024_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'obwód': 'TextEdit', 'powierzch': 'TextEdit', 'wsp': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AnalizahistorycznazSentinel_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'GRID_ID': 'TextEdit', 'proc_a': 'TextEdit', 'proc_b': 'TextEdit', 'proc_c': 'TextEdit', 'a_b': 'TextEdit', 'b_c': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMap2002_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'obwód': 'no label', 'powierzc_1': 'no label', 'wsp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Mapahistoryczna1940_3.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Obwód': 'no label', 'Powierzchn': 'no label', 'Wsp': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Sentinel2024_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'obwód': 'no label', 'powierzch': 'no label', 'wsp': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_AnalizahistorycznazSentinel_5.set('fieldLabels', {'Shape_Leng': 'no label', 'GRID_ID': 'no label', 'proc_a': 'no label', 'proc_b': 'no label', 'proc_c': 'no label', 'a_b': 'no label', 'b_c': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_AnalizahistorycznazSentinel_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});