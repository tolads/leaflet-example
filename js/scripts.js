/* global
  L,
  json_kulterulet_0,
  json_belterulet_1,
  json_pillango_2,
  json_folyo_polygon_3,
  json_folyo_vonal_4,
  json_patak_5,
  json_to_6,
  json_megyehatar_7,
  json_vasut_8,
  json_ut_9,
  json_fout_10,
  json_telepules_11,
  resetLabels,
  addLabel,
  labels,
  d3
*/

const map = L.map('map', {
  zoomControl: true,
  maxZoom: 15,
  minZoom: 8,
});

map.attributionControl.setPrefix(
  '<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
);

// var hash = new L.Hash(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {}

// Kulterulet
function style_kulterulet_0_0() {
  return {
    pane: 'pane_kulterulet_0',
    stroke: false,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(255,229,149,1.0)',
  };
}
map.createPane('pane_kulterulet_0');
map.getPane('pane_kulterulet_0').style.zIndex = 400;
map.getPane('pane_kulterulet_0').style['mix-blend-mode'] = 'normal';
var layer_kulterulet_0 = new L.geoJson(json_kulterulet_0, {
  attribution: '',
  pane: 'pane_kulterulet_0',
  style: style_kulterulet_0_0,
});
bounds_group.addLayer(layer_kulterulet_0);
map.addLayer(layer_kulterulet_0);

// Zoom
map.fitBounds(layer_kulterulet_0.getBounds());
document.getElementById('zoom').addEventListener('click', () => map.flyToBounds(layer_kulterulet_0.getBounds()));

// Belterulet
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
  };
}
map.createPane('pane_belterulet_1');
map.getPane('pane_belterulet_1').style.zIndex = 401;
map.getPane('pane_belterulet_1').style['mix-blend-mode'] = 'normal';
var layer_belterulet_1 = new L.geoJson(json_belterulet_1, {
  attribution: '',
  pane: 'pane_belterulet_1',
  style: style_belterulet_1_0,
});
bounds_group.addLayer(layer_belterulet_1);
map.addLayer(layer_belterulet_1);

// Butterfly
function style_pillango_2_0() {
  return {
    pane: 'pane_pillango_2',
    stroke: false,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(190,207,80,1.0)',
  };
}
map.createPane('pane_pillango_2');
map.getPane('pane_pillango_2').style.zIndex = 402;
map.getPane('pane_pillango_2').style['mix-blend-mode'] = 'normal';
var layer_pillango_2 = new L.geoJson(json_pillango_2, {
  attribution: '',
  pane: 'pane_pillango_2',
  style: style_pillango_2_0,
});
bounds_group.addLayer(layer_pillango_2);
map.addLayer(layer_pillango_2);

// River polygon
function style_folyo_polygon_3_0() {
  return {
    pane: 'pane_folyo_polygon_3',
    stroke: false,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(0,149,255,1.0)',
  };
}
map.createPane('pane_folyo_polygon_3');
map.getPane('pane_folyo_polygon_3').style.zIndex = 403;
map.getPane('pane_folyo_polygon_3').style['mix-blend-mode'] = 'normal';
var layer_folyo_polygon_3 = new L.geoJson(json_folyo_polygon_3, {
  attribution: '',
  pane: 'pane_folyo_polygon_3',
  style: style_folyo_polygon_3_0,
});
bounds_group.addLayer(layer_folyo_polygon_3);
map.addLayer(layer_folyo_polygon_3);

// River line
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
  };
}
map.createPane('pane_folyo_vonal_4');
map.getPane('pane_folyo_vonal_4').style.zIndex = 404;
map.getPane('pane_folyo_vonal_4').style['mix-blend-mode'] = 'normal';
var layer_folyo_vonal_4 = new L.geoJson(json_folyo_vonal_4, {
  attribution: '',
  pane: 'pane_folyo_vonal_4',
  style: style_folyo_vonal_4_0,
});
bounds_group.addLayer(layer_folyo_vonal_4);
map.addLayer(layer_folyo_vonal_4);

// Stream
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
  };
}
map.createPane('pane_patak_5');
map.getPane('pane_patak_5').style.zIndex = 405;
map.getPane('pane_patak_5').style['mix-blend-mode'] = 'normal';
var layer_patak_5 = new L.geoJson(json_patak_5, {
  attribution: '',
  pane: 'pane_patak_5',
  style: style_patak_5_0,
});
bounds_group.addLayer(layer_patak_5);
map.addLayer(layer_patak_5);

// Lake
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
  };
}
map.createPane('pane_to_6');
map.getPane('pane_to_6').style.zIndex = 406;
map.getPane('pane_to_6').style['mix-blend-mode'] = 'normal';
var layer_to_6 = new L.geoJson(json_to_6, {
  attribution: '',
  pane: 'pane_to_6',
  style: style_to_6_0,
});
bounds_group.addLayer(layer_to_6);
map.addLayer(layer_to_6);

// Country border
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
  };
}
map.createPane('pane_megyehatar_7');
map.getPane('pane_megyehatar_7').style.zIndex = 407;
map.getPane('pane_megyehatar_7').style['mix-blend-mode'] = 'normal';
var layer_megyehatar_7 = new L.geoJson(json_megyehatar_7, {
  attribution: '',
  pane: 'pane_megyehatar_7',
  style: style_megyehatar_7_0,
});
bounds_group.addLayer(layer_megyehatar_7);
map.addLayer(layer_megyehatar_7);

// Railway
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
  };
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
  };
}
map.createPane('pane_vasut_8');
map.getPane('pane_vasut_8').style.zIndex = 408;
map.getPane('pane_vasut_8').style['mix-blend-mode'] = 'normal';
var layer_vasut_8 = new L.geoJson.multiStyle(json_vasut_8, {
  attribution: '',
  pane: 'pane_vasut_8',
  styles: [style_vasut_8_0, style_vasut_8_1],
});
bounds_group.addLayer(layer_vasut_8);
map.addLayer(layer_vasut_8);

// Road
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
  };
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
  };
}
map.createPane('pane_ut_9');
map.getPane('pane_ut_9').style.zIndex = 409;
map.getPane('pane_ut_9').style['mix-blend-mode'] = 'normal';
var layer_ut_9 = new L.geoJson.multiStyle(json_ut_9, {
  attribution: '',
  pane: 'pane_ut_9',
  styles: [style_ut_9_0, style_ut_9_1],
});
bounds_group.addLayer(layer_ut_9);
map.addLayer(layer_ut_9);

// Main road
function style_fout_10_0(feature) {
  switch (String(feature.properties['Tipus'])) {
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
      };
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
      };
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
      };
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
      };
    default:
      return {};
  }
}
function style_fout_10_1(feature) {
  switch (String(feature.properties['Tipus'])) {
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
      };
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
      };
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
      };
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
      };
    default:
      return {};
  }
}
function style_fout_10_2(feature) {
  switch (String(feature.properties['Tipus'])) {
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
      };
    case 'autout':
      return {
        pane: 'pane_fout_10',
      };
    case 'elsorendu':
      return {
        pane: 'pane_fout_10',
      };
    case 'masodrendu':
      return {
        pane: 'pane_fout_10',
      };
    default:
      return {};
  }
}
map.createPane('pane_fout_10');
map.getPane('pane_fout_10').style.zIndex = 410;
map.getPane('pane_fout_10').style['mix-blend-mode'] = 'normal';
var layer_fout_10 = new L.geoJson.multiStyle(json_fout_10, {
  attribution: '',
  pane: 'pane_fout_10',
  styles: [style_fout_10_0, style_fout_10_1, style_fout_10_2],
});
bounds_group.addLayer(layer_fout_10);
map.addLayer(layer_fout_10);

// Settlement
function pop_telepules_11(feature, layer) {
  layer.bindPopup(chart, { maxHeight: 400 }); // eslint-disable-line no-use-before-define
  layer.off('click', this.openPopup, this);
  layer.on('mouseover', function mover() {
    if (document.getElementById('butterfly').checked) return;
    this.openPopup();
  });
  layer.on('mouseout', function mout() {
    if (document.getElementById('butterfly').checked) return;
    this.closePopup();
  });
}
function style_telepules_11_0(feature) {
  switch (String(feature.properties['Tel_status'])) {
    case 'község':
      return {
        pane: 'pane_telepules_11',
        shape: 'circle',
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
      };
    case 'megyei jogú város':
      return {
        pane: 'pane_telepules_11',
        shape: 'square',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(219,30,42,1.0)',
      };
    case 'nagyközség':
      return {
        pane: 'pane_telepules_11',
        shape: 'circle',
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
      };
    case 'város':
      return {
        pane: 'pane_telepules_11',
        shape: 'circle',
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
      };
    default:
      return {};
  }
}
map.createPane('pane_telepules_11');
map.getPane('pane_telepules_11').style.zIndex = 411;
map.getPane('pane_telepules_11').style['mix-blend-mode'] = 'normal';
var layer_telepules_11 = new L.geoJson(json_telepules_11, {
  attribution: '',
  pane: 'pane_telepules_11',
  onEachFeature: pop_telepules_11,
  pointToLayer(feature, latlng) {
    return L.shapeMarker(latlng, style_telepules_11_0(feature));
  },
});
bounds_group.addLayer(layer_telepules_11);
map.addLayer(layer_telepules_11);

var baseMaps = {};
L.control
  .layers(
    baseMaps,
    {
      'Település<br />\
        <table>\
          <tr><td style="text-align: center;"><img src="legend/telepules_11_megyeijogúváros1.png" /></td><td>Megyei jogú város</td></tr>\
          <tr><td style="text-align: center;"><img src="legend/telepules_11_város3.png" /></td><td>Város</td></tr>\
          <tr><td style="text-align: center;"><img src="legend/telepules_11_nagyközség2.png" /></td><td>Nagyközség</td></tr>\
          <tr><td style="text-align: center;"><img src="legend/telepules_11_község0.png" /></td><td>Község</td></tr>\
        </table>':
        layer_telepules_11,
      'Főút<br />\
        <table>\
          <tr><td style="text-align: center;"><img src="legend/fout_10_autópálya0.png" /></td><td>Autópálya</td></tr>\
          <tr><td style="text-align: center;"><img src="legend/fout_10_autóút1.png" /></td><td>Autóút</td></tr>\
          <tr><td style="text-align: center;"><img src="legend/fout_10_elsőrendűút2.png" /></td><td>Elsőrendű út</td></tr>\
          <tr><td style="text-align: center;"><img src="legend/fout_10_másodrendűút3.png" /></td><td>Másodrendű út</td></tr>\
        </table>':
        layer_fout_10,
      '<img src="legend/ut_9.png" /> Út': layer_ut_9,
      '<img src="legend/vasut_8.png" /> Vasút': layer_vasut_8,
      '<img src="legend/to_6.png" /> Tó': layer_to_6,
      '<img src="legend/patak_5.png" /> Patak': layer_patak_5,
      '<img src="legend/folyo_vonal_4.png" /> Folyó (vonal)': layer_folyo_vonal_4,
      '<img src="legend/folyo_polygon_3.png" /> Folyó (polygon)': layer_folyo_polygon_3,
      '<img src="legend/belterulet_1.png" /> Belterület': layer_belterulet_1,
      '<img src="legend/kulterulet_0.png" /> Külterület': layer_kulterulet_0,
    },
    { collapsed: false },
  )
  .addTo(map);
setBounds();
var i = 0;
layer_telepules_11.eachLayer((layer) => {
  layer.bindTooltip(
    layer.feature.properties['Telnev'] !== null
      ? String(
        '<div style="color: #000000; font-size: 8pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' +
          layer.feature.properties['Telnev'],
      ) + '</div>'
      : '',
    { permanent: true, offset: [-0, -16], className: 'css_telepules_11' },
  );
  labels.push(layer);
  window.totalMarkers += 1;
  layer.added = true; // eslint-disable-line no-param-reassign
  addLabel(layer, i);
  i++;
});
resetLabels([layer_telepules_11]);
map.on('zoomend', () => {
  resetLabels([layer_telepules_11]);
});
map.on('layeradd', () => {
  resetLabels([layer_telepules_11]);
});
map.on('layerremove', () => {
  resetLabels([layer_telepules_11]);
});

// own
document.getElementById('butterfly').addEventListener('change', () => {
  map.addLayer(layer_pillango_2);
});
document.getElementById('age').addEventListener('change', () => {
  map.removeLayer(layer_pillango_2);
});

function chart(e) {
  const key = Object.keys(e._eventParents)[0]; // eslint-disable-line no-underscore-dangle
  const { properties } = e._eventParents[key].feature; // eslint-disable-line no-underscore-dangle
  const data = [
    { label: 'gyermek', value: Number(properties.gyermek) },
    { label: 'fiatal', value: Number(properties.fiatal) },
    { label: 'középkorú', value: Number(properties.kozepkoru) },
    { label: 'nyugdíjas', value: Number(properties.nyugdijas) },
  ];

  const width = 170;
  const height = 140;
  const r = 55;
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(r);

  const pie = d3.pie()
    .value(d => d.value);

  const arcs = pie(data);

  const arcLabel = d3.arc().innerRadius(r).outerRadius(r);

  var div = d3.create('div');
  var svg = div.append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('text-anchor', 'middle')
    .style('font', '12px sans-serif');

  const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  g.selectAll('path')
    .data(arcs)
    .enter().append('path')
    .attr('fill', (d, i2) => color(i2))
    .attr('stroke', 'white')
    .attr('d', arc)
    .append('title')
    .text(d => d.data.label);

  g.selectAll('text')
    .data(arcs)
    .enter()
    .append('text')
    .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
    .attr('dy', '0.35em')
    .style('font-weight', 'bold')
    .text(d => d.data.label);

  return svg.node();
}
