window.onload = init;

function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [-13164621.98530645, 4040526.890632931],
      zoom: 7,
      maxZoom: 10,
      minZoom: 4,
    }),
    target: "js-map",
  });

  // Basemap Layers
  const openStreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: "OSMStandard",
  });

  const stamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: "http://tile.stamen.com/toner/{z}/{x}/{y}.png",
      attributions:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    }),
    visible: false,
    title: "StamenTerrain",
  });

  // Layer Group
  const baseLayerGroup = new ol.layer.Group({
    layers: [openStreetMapStandard, stamenTerrain],
  });
  map.addLayer(baseLayerGroup);

  // Layer Switcher Logic for Basemaps
  const baseLayerElements = document.querySelectorAll(
    ".sidebar > input[type=radio]"
  );
  for (let baseLayerElement of baseLayerElements) {
    baseLayerElement.addEventListener("change", function () {
      let baseLayerElementValue = this.value;
      baseLayerGroup.getLayers().forEach(function (element, index, array) {
        let baseLayerTitle = element.get("title");
        element.setVisible(baseLayerTitle === baseLayerElementValue);
      });
    });
  }
}
