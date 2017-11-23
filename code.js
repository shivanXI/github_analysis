var graph = sigma.init(document.getElementById('graph')).drawingProperties({
  defaultLabelColor: '#fff',
  defaultLabelSize: 12,
  defaultLabelBGColor: '#fff',
  defaultLabelHoverColor: '#000',
  labelThreshold: 4,
  defaultEdgeType: 'curve'
}).graphProperties({
  minNodeSize: 1,
  maxNodeSize: 10,
  minEdgeSize: 0.3,
  maxEdgeSize: 4,
  edgesPowRatio: 0.5
}).mouseProperties({
  maxRatio: 32
}).bind('upnodes', function(e) {
  window.open(graph.getNodes(e.content[0]).attr.attributes.name);
});

var greyColor = '#666';
var filterActive = false;
var filterTimeout = false;

graph.bind('overnodes', function(event) {
  var nodes = event.content;
  var neighbors = {};

  if (filterActive) {
    return;
  }