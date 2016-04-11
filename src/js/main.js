var PathOS = PathOS || {};

PathOS.module = function(config) {
	console.log("Adding PathOS module... "+config.name);
	this.config = config;
	var div = this.div = d3.select("#sidebar-wrapper")
		.append("div")
		.classed("module", true)
		.attr("id", config.name);

	div.append("a").attr({
			href: "#"+config.name,
			class: "btn btn-default module-title"
		}).on("click", this.toggle)
			.datum(config)
			.classed("hidden", config.hidden)
			.append("h1")
			.html(config.title);

	var ul = this.ul = div.append("ul")
		.style({
			clip: "rect(0px, 1000px, 0px, 0px)"
		});
	config.data.forEach(function(d){
		ul.append("li").html(d);
	});
};

PathOS.module.prototype.toggle = function(){
	$(this).toggleClass("hidden");
	var d = d3.select(this).datum(),
			id = "#"+d.name;
	
	var height = $(id+" ul").height()+$(id).height();

	if(d3.select(id).select("a").classed("hidden")) {
		d3.select(id).style("min-height", "0px");
		d3.select(id).select("ul").style("clip", "rect(0px, 1000px, 0px, 0px)");
	} else {
		d3.select(id).style("min-height", height+"px");
		d3.select(id).select("ul").style("clip", "rect(0px, 1000px, "+height+"px, 0px)");
	}	
};


