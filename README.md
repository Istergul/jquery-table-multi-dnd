# jQuery Table Drug-n-Drop Plugin
Fork tableDND plugin for jQuery. Added multiple drug-n-drop rows and some bug 
fixes.

## Documentation

Plugin initialization:

```js
$('#sortable').tableDnD({});
```

There are a number of parameters you can set in order to control the look and 
feel of the table and also to add custom behaviour on drag or on drop. The 
parameters are specified as a map in the usual way and are described below:

* `onDragStyle`   - Styles that are added to the row being dragged. The value 
                    of this parameter should be set by an object with a set of
                    css properties. Added styles will not be removed after 
                    the end of the drag.
* `onDropStyle`   - Styles that are added to the dispensed lines. The value of 
                    this parameter can also be installed with a set of object 
                    css properties. These styles can be used to perezatiraniya 
                    styles, set the property onDragStyle.
* `onDragClass`   - The class, which will be added to the row being dragged. 
                    This class will retire after the dragging than the property
                    is different from the previous two.
* `onDragStart`   - The function to be executed at the initiation of a drag.
* `onDrop`        - Pass a function that will be called when the row is dropped.
* `scrollAmount`  - This is the number of pixels to scroll if the user moves 
                    the mouse cursor to the top or bottom of the window.

## Examples

Simple example:

```js
$('#sortable').tableDnD({
    onDragClass: "myDragClass",
    onDragStart: function(table, draggedRow, dragObjs) {
        console.log('start');
    },
    onDrop: function(table, droppedRow, dragObjs) {
        console.log('stop');
    }
});
```

```html
<table id="sortable">
    <tr><td>row 1</td><td>text text text</td></tr>
    <tr><td>row 2</td><td>text text text</td></tr>
    <tr><td>row 3</td><td>text text text</td></tr>
    <tr><td>row 4</td><td>text text text</td></tr>
    <tr><td>row 5</td><td>text text text</td></tr>
</table>
```

Example with multiple drug-n-drop:

```js
$('#sortable').tableDnD({
    onDragClass: "myDragClass",
    checkableClass: "trCheck",
    onDragStart: function(table, draggedRow, dragObjs) {
        console.log('start');
    },
    onDrop: function(table, droppedRow, dragObjs) {
        console.log('stop');
    }
});
```

```html
<table id="sortable">
    <tr><td>1<input type="checkbox" name="chTrack_1" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>2<input type="checkbox" name="chTrack_2" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>3<input type="checkbox" name="chTrack_3" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>4<input type="checkbox" name="chTrack_4" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>5<input type="checkbox" name="chTrack_5" class="trCheck" /></td><td>text text text</td></tr>
</table>
```

Example with several sections:

```html
<table id="sortable">
<tbody>
    <tr class="nodrop nodrag"><th>H1</th><th>H2</th></tr>
    <tr><td>1<input type="checkbox" name="chTrack_1" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>2<input type="checkbox" name="chTrack_2" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>3<input type="checkbox" name="chTrack_3" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>4<input type="checkbox" name="chTrack_4" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>5<input type="checkbox" name="chTrack_5" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>6<input type="checkbox" name="chTrack_6" class="trCheck" /></td><td>text text text</td></tr>
</tbody>
<tbody>
    <tr class="nodrop nodrag"><th>H1</th><th>H2</th></tr>
    <tr><td>7<input type="checkbox" name="chTrack_7" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>8<input type="checkbox" name="chTrack_8" class="trCheck" /></td><td>text text text</td></tr>
    <tr><td>9<input type="checkbox" name="chTrack_9" class="trCheck" /></td><td>text text text</td></tr>
</tbody>
</table>
```
