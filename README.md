handsontable-timepicker
=======================

TimePicker custom editor for Handsontable

Usage
=======================

Add bootstrap-clockpicker and handsontable-timepicker reference in your html.
The handsontable constructor should have the new editor for columns:
$container.handsontable({
  data: data,
  columns: [
  	{editor: 'time'},
  	{editor: 'time'},
  	{editor: 'time'}
  ]
});

For a demo try this:
http://embed.plnkr.co/HHF9unL5u8hpofur9eGN/preview
