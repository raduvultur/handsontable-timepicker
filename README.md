handsontable-timepicker
=======================

TimePicker custom editor for [Handsontable](http://handsontable.com/)

Usage
=======================

Add [bootstrap-clockpicker](https://github.com/weareoutman/clockpicker) and jquery.handsontable.clockeditor.js reference in your html.
The handsontable constructor should use the new editor for time columns:
```
$container.handsontable({
  data: data,
  columns: [
  	{editor: 'time'},
  	{editor: 'time'},
  	{editor: 'time'}
  ]
});
```
For a demo try this:
http://run.plnkr.co/JhfFLekt9v4ge4YH/
