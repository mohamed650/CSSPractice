var printIcon = function(cell, formatterParams){ //plain text value
    return "<i class='fa fa-print'></i>";
};
let upbtncallback = function ( e, cell) {
	updatetable();
};
let delbtncallback = function ( e, cell) {
	deletetable();
};
function updatetable(){
	/*var id = $("#id").val();
	var name = $("#name").val();
	var phno = $("#phno").val();
	var location = $("#location").val();
	var dob = $("#dob").val();*/
	var select = table.getSelectedRows();
	/*var select = table.getRows()
		.filter(row => row.getData().id == '1')
		.forEach(row => row.toggleSelect());*/
	if($('.select-row').is(':checked')){
		/*var data = table.getSelectedData(select);
		alert(data);*/
		document.getElementById("id").value = select[0].id;
		document.getElementById("name").value = select[0].name;
		document.getElementById("phno").value = select[0].phno;
		document.getElementById("location").value = select[0].location;
		document.getElementById("dob").value = select[0].dob;
		$("#exampleModal").modal("show");
	}
	else{
		$("#exampleModal").modal('hide');
		alert("please select a row..");
	}
}
function deletetable(){
	var select = table.getSelectedRows();
	if($('.select-row').is(':checked')){
		for(var i=1; i<=select.length; i++){
			table.deleteRow(select);
		}
	}else{
		alert("Please Select a row to delete");
	}
}
let upbtn = function( value, data, cell, row, options ) {
    return `<button type="button" class="btn btn-primary">Update Data</button>`;
};
let delbtn = function( value, data, cell, row, options ) {
    return `<button type="button" class="btn btn-primary">Delete Data</button>`;
};


var table = new Tabulator("#example-table", {
	selectable: 1,
	downloadRowRange:"selected",
	layout:"fitDataFill",
	pagination:"local",
    paginationSize:6,
    paginationSizeSelector:[3, 6],
    movableColumns:true,
    paginationCounter:"rows",
	columns: [
	{
      title: '<input type="checkbox" class="select-all-row" />',
      field: 'IsSelected',
      formatter: function (cell, formatterParams, onRendered) {
		return '<input type="checkbox" class="select-row" readonly />';
      },
      headerSort: false,
      cssClass: 'text-center',
      frozen: true,
      cellClick: function (e, cell) {
        var $element = $(cell.getElement());
        var $chkbox = $element.find('.select-row');
        if (cell.getData().IsSelected) {
          $chkbox.prop('checked', false);
          cell.getRow().deselect();
          cell.getData().IsSelected = false;
        } else {
          $chkbox.prop('checked', true);
          cell.getRow().select();
          cell.getData().IsSelected = true;
        }
      }
    },
	{formatter:printIcon, width:40, hozAlign:"center", cellClick:function(e, cell){
		if($('.select-row').is(':checked')){
			alert("Printing row data for: " + cell.getRow().getData().name)
			table.download("xlsx", "data.xlsx","visible");
		}else{
			alert("Please select a row..");
		}
	  }
	},
	{title:"ID", field: "id"},
	{title:"Name", field:"name"},
    {title:"PhoneNumber", field:"phno"},
    {title:"Location", field:"location"},
    {title:"BirthDate", field:"dob"},
	{title: "Update", formatter: upbtn, cellClick: upbtncallback, width: 150},
	{title: "Delete", formatter: delbtn, cellClick: delbtncallback, width: 150},
	],
});
document.getElementById("download-xlsx").addEventListener("click", function(){
	table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
});
$('#id').keyup(function(){
        $(this).val($(this).val().toUpperCase());
});
$("#submitbtn").click(function(){
	var id = $("#id").val();
	var name = $("#name").val();
	var phno = $("#phno").val();
	var location = $("#location").val();
	var dob = $("#dob").val();
	table.addRow({id:id, name: name, phno: phno, location: location, dob: dob});
	$('#exampleModal').on('hidden.bs.modal', function (e) {
	$(this)
    .find("input,textarea,select")
       .val('')
       .end()
    .find("input[type=checkbox], input[type=radio]")
       .prop("checked", "")
       .end();
});
});
$("#delbtn").click(function(){
	deletetable();
});
$("#updatebtn").click(function(){
	updatetable();
});
$("#update").click(function(){
	var id = $("#id").val();
	var name = $("#name").val();
	var phno = $("#phno").val();
	var location = $("#location").val();
	var dob = $("#dob").val();
	table.updateData([{id:id, name:name, phno:phno, location:location, dob:dob}]);
	alert("Updated");
});
