sigma.publicPrototype.parseJson = function(jsonPath,callback) {
	var sigmaInstance = this;
	var edgeId = 0;
	jQuery.getJSON(jsonPath, function(data) {
		for (i=0; i<data.nodes.length; i++){
			var id=data.nodes[i].id;
			//window.NODE = data.nodes[i];//In the original, but not sure purpose
			sigmaInstance.addNode(id,data.nodes[i]);
		}
		for(j=0; j<data.edges.length; j++){
			var edgeNode = data.edges[j];

			var source = edgeNode.source;
			var target = edgeNode.target;

			sigmaInstance.addEdge(edgeId++,source,target,edgeNode);
		}
		if (callback) callback.call(this);//Trigger the data ready function
	});//end jquery getJSON function
};//end sigma.parseJson function