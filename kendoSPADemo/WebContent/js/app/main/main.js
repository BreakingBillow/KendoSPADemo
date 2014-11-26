function onSelect(e) {

	alert("Selecting: " + this.text(e.node));
	router.navigate("/tree/" + this.text(e.node));

}

function onCheck(e) {
	kendoConsole.log("Checkbox changed :: " + this.text(e.node));
}

function onChange(e) {
	kendoConsole.log("Selection changed");
}

function onCollapse(e) {
	kendoConsole.log("Collapsing " + this.text(e.node));
}

function onExpand(e) {
	kendoConsole.log("Expanding " + this.text(e.node));
}

function onDragStart(e) {
	kendoConsole.log("Started dragging " + this.text(e.sourceNode));
}

function onDrag(e) {
	kendoConsole.log("Dragging " + this.text(e.sourceNode));
}

function onDrop(e) {
	kendoConsole.log("Dropped " + this.text(e.sourceNode) + " ("
			+ (e.valid ? "valid" : "invalid") + ")");
}

function onDragEnd(e) {
	kendoConsole.log("Finished dragging " + this.text(e.sourceNode));
}

function onNavigate(e) {
	kendoConsole.log("Navigate " + this.text(e.node));
}

$("#demoTree").kendoTreeView({
	checkboxes : true,
	dataSource : [ {
		text : "Site A",
		nodeId : "32",
		expanded : true,
		items : [ {
			text : "Plant 1",
			nodeId : "3ds2"
		}, {
			text : "Plant 2",
			id : "6532"
		}, {
			text : "Plant 3",
			nodeId : "6532"
		} ]
	}, {
		text : "Site B",
		nodeId : "32635",
		items : [ {
			text : "Plant 1",
			nodeId : "362"
		}, {
			text : "Plant 2",
			nodeId : "3235"
		}, {
			text : "Plant 3",
			nodeId : "33562"
		} ]
	}, {
		text : "Site C",
		nodeId : "365352"
	} ],
	select : onSelect,
	check : onCheck,
	change : onChange,
	collapse : onCollapse,
	expand : onExpand,
	dragAndDrop : true,
	/* drag & drop events */
	dragstart : onDragStart,
	drag : onDrag,
	drop : onDrop,
	dragend : onDragEnd,
	navigate : onNavigate
});
