$(document).ready(function() {

    $('#sortableSimple, #sortableMultiple, #sortableSections').tableDnD({
        onDragClass: "myDragClass",
        checkableClass: "trCheck",
        onDragStart: function(table, draggedRow, dragObjs) { },
        onDrop: function(table, droppedRow, dragObjs) { }
    });

});

