var map = L.map('map', {
  zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[47.59693411092581,20.28141500753399],[48.430943571442974,22.549388652032455]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
function pop_kulterulet_0(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['Nev'] !== null ? Autolinker.link(String(feature.properties['Nev'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['Jaras_nev'] !== null ? Autolinker.link(String(feature.properties['Jaras_nev'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_kulterulet_0_0() {
  return {
      pane: 'pane_kulterulet_0',
      stroke: false,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(255,229,149,1.0)',
  }
}
map.createPane('pane_kulterulet_0');
map.getPane('pane_kulterulet_0').style.zIndex = 400;
map.getPane('pane_kulterulet_0').style['mix-blend-mode'] = 'normal';
var layer_kulterulet_0 = new L.geoJson(json_kulterulet_0, {
  attribution: '',
  pane: 'pane_kulterulet_0',
  onEachFeature: pop_kulterulet_0,
  style: style_kulterulet_0_0,
});
bounds_group.addLayer(layer_kulterulet_0);
map.addLayer(layer_kulterulet_0);
function pop_belterulet_1(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['Nev'] !== null ? Autolinker.link(String(feature.properties['Nev'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['KSH_kod'] !== null ? Autolinker.link(String(feature.properties['KSH_kod'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['KSH_kod_2'] !== null ? Autolinker.link(String(feature.properties['KSH_kod_2'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['telepules'] !== null ? Autolinker.link(String(feature.properties['telepules'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_belterulet_1_0() {
  return {
      pane: 'pane_belterulet_1',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(243,166,178,1.0)',
  }
}
map.createPane('pane_belterulet_1');
map.getPane('pane_belterulet_1').style.zIndex = 401;
map.getPane('pane_belterulet_1').style['mix-blend-mode'] = 'normal';
var layer_belterulet_1 = new L.geoJson(json_belterulet_1, {
  attribution: '',
  pane: 'pane_belterulet_1',
  onEachFeature: pop_belterulet_1,
  style: style_belterulet_1_0,
});
bounds_group.addLayer(layer_belterulet_1);
map.addLayer(layer_belterulet_1);
function pop_pillango_2(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['terulet'] !== null ? Autolinker.link(String(feature.properties['terulet'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_pillango_2_0() {
  return {
      pane: 'pane_pillango_2',
      stroke: false,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(190,207,80,1.0)',
  }
}
map.createPane('pane_pillango_2');
map.getPane('pane_pillango_2').style.zIndex = 402;
map.getPane('pane_pillango_2').style['mix-blend-mode'] = 'normal';
var layer_pillango_2 = new L.geoJson(json_pillango_2, {
  attribution: '',
  pane: 'pane_pillango_2',
  onEachFeature: pop_pillango_2,
  style: style_pillango_2_0,
});
bounds_group.addLayer(layer_pillango_2);
map.addLayer(layer_pillango_2);
function pop_folyo_polygon_3(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['Nev'] !== null ? Autolinker.link(String(feature.properties['Nev'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_folyo_polygon_3_0() {
  return {
      pane: 'pane_folyo_polygon_3',
      stroke: false,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(0,149,255,1.0)',
  }
}
map.createPane('pane_folyo_polygon_3');
map.getPane('pane_folyo_polygon_3').style.zIndex = 403;
map.getPane('pane_folyo_polygon_3').style['mix-blend-mode'] = 'normal';
var layer_folyo_polygon_3 = new L.geoJson(json_folyo_polygon_3, {
  attribution: '',
  pane: 'pane_folyo_polygon_3',
  onEachFeature: pop_folyo_polygon_3,
  style: style_folyo_polygon_3_0,
});
bounds_group.addLayer(layer_folyo_polygon_3);
map.addLayer(layer_folyo_polygon_3);
function pop_folyo_vonal_4(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['Nev'] !== null ? Autolinker.link(String(feature.properties['Nev'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_folyo_vonal_4_0() {
  return {
      pane: 'pane_folyo_vonal_4',
      opacity: 1,
      color: 'rgba(0,149,255,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 2.0,
      fillOpacity: 0,
  }
}
map.createPane('pane_folyo_vonal_4');
map.getPane('pane_folyo_vonal_4').style.zIndex = 404;
map.getPane('pane_folyo_vonal_4').style['mix-blend-mode'] = 'normal';
var layer_folyo_vonal_4 = new L.geoJson(json_folyo_vonal_4, {
  attribution: '',
  pane: 'pane_folyo_vonal_4',
  onEachFeature: pop_folyo_vonal_4,
  style: style_folyo_vonal_4_0,
});
bounds_group.addLayer(layer_folyo_vonal_4);
map.addLayer(layer_folyo_vonal_4);
function pop_patak_5(feature, layer) {
}

function style_patak_5_0() {
  return {
      pane: 'pane_patak_5',
      opacity: 1,
      color: 'rgba(0,149,255,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 1.0,
      fillOpacity: 0,
  }
}
map.createPane('pane_patak_5');
map.getPane('pane_patak_5').style.zIndex = 405;
map.getPane('pane_patak_5').style['mix-blend-mode'] = 'normal';
var layer_patak_5 = new L.geoJson(json_patak_5, {
  attribution: '',
  pane: 'pane_patak_5',
  onEachFeature: pop_patak_5,
  style: style_patak_5_0,
});
bounds_group.addLayer(layer_patak_5);
map.addLayer(layer_patak_5);
function pop_to_6(feature, layer) {
}

function style_to_6_0() {
  return {
      pane: 'pane_to_6',
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1.0,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(170,218,255,1.0)',
  }
}
map.createPane('pane_to_6');
map.getPane('pane_to_6').style.zIndex = 406;
map.getPane('pane_to_6').style['mix-blend-mode'] = 'normal';
var layer_to_6 = new L.geoJson(json_to_6, {
  attribution: '',
  pane: 'pane_to_6',
  onEachFeature: pop_to_6,
  style: style_to_6_0,
});
bounds_group.addLayer(layer_to_6);
map.addLayer(layer_to_6);
function pop_megyehatar_7(feature, layer) {
}

function style_megyehatar_7_0() {
  return {
      pane: 'pane_megyehatar_7',
      opacity: 1,
      color: 'rgba(126,133,139,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 2.0,
      fillOpacity: 0,
  }
}
map.createPane('pane_megyehatar_7');
map.getPane('pane_megyehatar_7').style.zIndex = 407;
map.getPane('pane_megyehatar_7').style['mix-blend-mode'] = 'normal';
var layer_megyehatar_7 = new L.geoJson(json_megyehatar_7, {
  attribution: '',
  pane: 'pane_megyehatar_7',
  onEachFeature: pop_megyehatar_7,
  style: style_megyehatar_7_0,
});
bounds_group.addLayer(layer_megyehatar_7);
map.addLayer(layer_megyehatar_7);
function pop_vasut_8(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['nev'] !== null ? Autolinker.link(String(feature.properties['nev'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['tipus'] !== null ? Autolinker.link(String(feature.properties['tipus'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['vonalszam'] !== null ? Autolinker.link(String(feature.properties['vonalszam'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['statusz'] !== null ? Autolinker.link(String(feature.properties['statusz'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['uzemelteto'] !== null ? Autolinker.link(String(feature.properties['uzemelteto'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_vasut_8_0() {
  return {
      pane: 'pane_vasut_8',
      opacity: 1,
      color: 'rgba(0,0,0,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 2.0,
      fillOpacity: 0,
  }
}
function style_vasut_8_1() {
  return {
      pane: 'pane_vasut_8',
      opacity: 1,
      color: 'rgba(255,255,255,1.0)',
      dashArray: '10,5',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 1.0,
      fillOpacity: 0,
  }
}
map.createPane('pane_vasut_8');
map.getPane('pane_vasut_8').style.zIndex = 408;
map.getPane('pane_vasut_8').style['mix-blend-mode'] = 'normal';
var layer_vasut_8 = new L.geoJson.multiStyle(json_vasut_8, {
  attribution: '',
  pane: 'pane_vasut_8',
  onEachFeature: pop_vasut_8,
  styles: [style_vasut_8_0,style_vasut_8_1,]
});
bounds_group.addLayer(layer_vasut_8);
map.addLayer(layer_vasut_8);
function pop_ut_9(feature, layer) {
}

function style_ut_9_0() {
  return {
      pane: 'pane_ut_9',
      opacity: 1,
      color: 'rgba(233,233,233,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 2.0,
      fillOpacity: 0,
  }
}
function style_ut_9_1() {
  return {
      pane: 'pane_ut_9',
      opacity: 1,
      color: 'rgba(255,255,255,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 1.0,
      fillOpacity: 0,
  }
}
map.createPane('pane_ut_9');
map.getPane('pane_ut_9').style.zIndex = 409;
map.getPane('pane_ut_9').style['mix-blend-mode'] = 'normal';
var layer_ut_9 = new L.geoJson.multiStyle(json_ut_9, {
  attribution: '',
  pane: 'pane_ut_9',
  onEachFeature: pop_ut_9,
  styles: [style_ut_9_0,style_ut_9_1,]
});
bounds_group.addLayer(layer_ut_9);
map.addLayer(layer_ut_9);
function pop_fout_10(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['Utszam'] !== null ? Autolinker.link(String(feature.properties['Utszam'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['Tipus'] !== null ? Autolinker.link(String(feature.properties['Tipus'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['Seb_korlat'] !== null ? Autolinker.link(String(feature.properties['Seb_korlat'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_fout_10_0(feature) {
  switch(String(feature.properties['Tipus'])) {
      case 'autopalya':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(246,207,101,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 5.0,
      fillOpacity: 0,
  }
          break;
      case 'autout':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(246,207,102,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 4.0,
      fillOpacity: 0,
  }
          break;
      case 'elsorendu':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(246,207,102,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 4.0,
      fillOpacity: 0,
  }
          break;
      case 'masodrendu':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(246,207,102,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 4.0,
      fillOpacity: 0,
  }
          break;
  }
}
function style_fout_10_1(feature) {
  switch(String(feature.properties['Tipus'])) {
      case 'autopalya':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(255,235,161,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 3.0,
      fillOpacity: 0,
  }
          break;
      case 'autout':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(255,242,175,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 3.0,
      fillOpacity: 0,
  }
          break;
      case 'elsorendu':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(255,242,175,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 3.0,
      fillOpacity: 0,
  }
          break;
      case 'masodrendu':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(255,242,175,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 3.0,
      fillOpacity: 0,
  }
          break;
  }
}
function style_fout_10_2(feature) {
  switch(String(feature.properties['Tipus'])) {
      case 'autopalya':
          return {
      pane: 'pane_fout_10',
      opacity: 1,
      color: 'rgba(246,207,101,1.0)',
      dashArray: '',
      lineCap: 'square',
      lineJoin: 'bevel',
      weight: 1.0,
      fillOpacity: 0,
  }
          break;
      case 'autout':
          return {
      pane: 'pane_fout_10',
  }
          break;
      case 'elsorendu':
          return {
      pane: 'pane_fout_10',
  }
          break;
      case 'masodrendu':
          return {
      pane: 'pane_fout_10',
  }
          break;
  }
}
map.createPane('pane_fout_10');
map.getPane('pane_fout_10').style.zIndex = 410;
map.getPane('pane_fout_10').style['mix-blend-mode'] = 'normal';
var layer_fout_10 = new L.geoJson.multiStyle(json_fout_10, {
  attribution: '',
  pane: 'pane_fout_10',
  onEachFeature: pop_fout_10,
  styles: [style_fout_10_0,style_fout_10_1,style_fout_10_2,]
});
bounds_group.addLayer(layer_fout_10);
map.addLayer(layer_fout_10);
function pop_telepules_11(feature, layer) {
  var popupContent = '<table>\
          <tr>\
              <td colspan="2">' + (feature.properties['Telnev'] !== null ? Autolinker.link(String(feature.properties['Telnev'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['Ir_szam'] !== null ? Autolinker.link(String(feature.properties['Ir_szam'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['Tel_status'] !== null ? Autolinker.link(String(feature.properties['Tel_status'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['KSH_kod'] !== null ? Autolinker.link(String(feature.properties['KSH_kod'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['gyermek'] !== null ? Autolinker.link(String(feature.properties['gyermek'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['fiatal'] !== null ? Autolinker.link(String(feature.properties['fiatal'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['kozepkoru'] !== null ? Autolinker.link(String(feature.properties['kozepkoru'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['nyugdijas'] !== null ? Autolinker.link(String(feature.properties['nyugdijas'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['iskola_altalanos'] !== null ? Autolinker.link(String(feature.properties['iskola_altalanos'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['iskola_kozepiskola'] !== null ? Autolinker.link(String(feature.properties['iskola_kozepiskola'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['iskola_erettsegi'] !== null ? Autolinker.link(String(feature.properties['iskola_erettsegi'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['iskola_felsofoku'] !== null ? Autolinker.link(String(feature.properties['iskola_felsofoku'])) : '') + '</td>\
          </tr>\
          <tr>\
              <td colspan="2">' + (feature.properties['iskola_osszesen'] !== null ? Autolinker.link(String(feature.properties['iskola_osszesen'])) : '') + '</td>\
          </tr>\
      </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_telepules_11_0(feature) {
  switch(String(feature.properties['Tel_status'])) {
      case 'község':
          return {
      pane: 'pane_telepules_11',
      radius: 4.0,
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(211,84,194,1.0)',
  }
          break;
      case 'megyei jogú város':
          return {
      pane: 'pane_telepules_11',
      shape: 'square',
      radius: 8.0,
      opacity: 1,
      color: 'rgba(35,35,35,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 1,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(219,30,42,1.0)',
  }
          break;
      case 'nagyközség':
          return {
      pane: 'pane_telepules_11',
      radius: 4.0,
      opacity: 1,
      color: 'rgba(128,116,27,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 2.0,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(219,219,7,1.0)',
  }
          break;
      case 'város':
          return {
      pane: 'pane_telepules_11',
      radius: 5.2,
      opacity: 1,
      color: 'rgba(128,17,25,1.0)',
      dashArray: '',
      lineCap: 'butt',
      lineJoin: 'miter',
      weight: 2.0,
      fill: true,
      fillOpacity: 1,
      fillColor: 'rgba(219,30,42,1.0)',
  }
          break;
  }
}
map.createPane('pane_telepules_11');
map.getPane('pane_telepules_11').style.zIndex = 411;
map.getPane('pane_telepules_11').style['mix-blend-mode'] = 'normal';
var layer_telepules_11 = new L.geoJson(json_telepules_11, {
  attribution: '',
  pane: 'pane_telepules_11',
  onEachFeature: pop_telepules_11,
  pointToLayer: function (feature, latlng) {
      var context = {
          feature: feature,
          variables: {}
      };
      return L.circleMarker(latlng, style_telepules_11_0(feature));
  },
});
bounds_group.addLayer(layer_telepules_11);
map.addLayer(layer_telepules_11);
var baseMaps = {};
L.control.layers(baseMaps,{'telepules<br /><table><tr><td style="text-align: center;"><img src="legend/telepules_11_község0.png" /></td><td>község</td></tr><tr><td style="text-align: center;"><img src="legend/telepules_11_megyeijogúváros1.png" /></td><td>megyei jogú város</td></tr><tr><td style="text-align: center;"><img src="legend/telepules_11_nagyközség2.png" /></td><td>nagyközség</td></tr><tr><td style="text-align: center;"><img src="legend/telepules_11_város3.png" /></td><td>város</td></tr></table>': layer_telepules_11,'fout<br /><table><tr><td style="text-align: center;"><img src="legend/fout_10_autópálya0.png" /></td><td>autópálya</td></tr><tr><td style="text-align: center;"><img src="legend/fout_10_autóút1.png" /></td><td>autóút</td></tr><tr><td style="text-align: center;"><img src="legend/fout_10_elsőrendűút2.png" /></td><td>elsőrendű út</td></tr><tr><td style="text-align: center;"><img src="legend/fout_10_másodrendűút3.png" /></td><td>másodrendű út</td></tr></table>': layer_fout_10,'<img src="legend/ut_9.png" /> ut': layer_ut_9,'<img src="legend/vasut_8.png" /> vasut': layer_vasut_8,'<img src="legend/megyehatar_7.png" /> megyehatar': layer_megyehatar_7,'<img src="legend/to_6.png" /> to': layer_to_6,'<img src="legend/patak_5.png" /> patak': layer_patak_5,'<img src="legend/folyo_vonal_4.png" /> folyo_vonal': layer_folyo_vonal_4,'<img src="legend/folyo_polygon_3.png" /> folyo_polygon': layer_folyo_polygon_3,'<img src="legend/pillango_2.png" /> pillango': layer_pillango_2,'<img src="legend/belterulet_1.png" /> belterulet': layer_belterulet_1,'<img src="legend/kulterulet_0.png" /> kulterulet': layer_kulterulet_0,},{collapsed:false}).addTo(map);
setBounds();
var i = 0;
layer_megyehatar_7.eachLayer(function(layer) {
  var context = {
      feature: layer.feature,
      variables: {}
  };
  layer.bindTooltip((layer.feature.properties['Megye_nev'] !== null?String('<div style="color: #000000; font-size: 16pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Megye_nev']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_megyehatar_7'});
  labels.push(layer);
  totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_telepules_11.eachLayer(function(layer) {
  var context = {
      feature: layer.feature,
      variables: {}
  };
  layer.bindTooltip((layer.feature.properties['Telnev'] !== null?String('<div style="color: #000000; font-size: 8pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Telnev']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_telepules_11'});
  labels.push(layer);
  totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
resetLabels([layer_megyehatar_7,layer_telepules_11]);
map.on("zoomend", function(){
  resetLabels([layer_megyehatar_7,layer_telepules_11]);
});
map.on("layeradd", function(){
  resetLabels([layer_megyehatar_7,layer_telepules_11]);
});
map.on("layerremove", function(){
  resetLabels([layer_megyehatar_7,layer_telepules_11]);
});
