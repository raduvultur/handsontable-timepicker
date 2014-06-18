var TimeEditor = Handsontable.editors.BaseEditor.prototype.extend();

TimeEditor.prototype.init = function(){
    //Create clock input and update relevant properties
    this.clock = $('<input>');
    this.clock.addClass('clockInput').hide();
	this.instance.rootElement.append(this.clock);	
	this.clockInput = $('.clockInput').clockpicker({
		placement: 'bottom',
		align: 'left',
		autoclose: true
	});
};	

TimeEditor.prototype.open = function () {
    //make sure that input position matches cell position
	var $td = $(this.TD);
    var offset = $td.offset();
	
	this.clockInput.clockpicker('show');
	//remove hiding event of clockpicker
	$(document).off('click.clockpicker.cp1 focusin.clockpicker.cp1');
	
	var $cpop = $('.clockpicker-popover');
	$cpop.offset({ top: offset.top + $td.height() + 10, left: offset.left });
 
	$('.clockpicker-hours, .clockpicker-span-hours, .clockpicker-span-minutes').on('mousedown mouseup', function (event) {
      event.stopPropagation();
    });	
};

TimeEditor.prototype.close = function () {
    this.clockInput.clockpicker('hide');
};
TimeEditor.prototype.getValue = function(){
	return $('.clockpicker-span-hours').text() + ':' + $('.clockpicker-span-minutes').text();
};
TimeEditor.prototype.setValue = function(newValue){
	this.clock.val(newValue);
}; 
TimeEditor.prototype.focus = function () {};

Handsontable.editors.registerEditor('time', TimeEditor);
