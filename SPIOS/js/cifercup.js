$(document).ready( function () {
    $('#dataCup').DataTable();
} );


 var table = $('#dataCup').DataTable({
	         paging: true, //habilita el paginador
    		select: true,
	        buttons: [ 'excel', 'pdf' ]
 } );
	 
	    table.buttons().container()
	        .appendTo( '#dataCup_wrapper .col-md-6:eq(0)' );