'use strict';
( function() {
	var list = [],
		listElement = document.querySelector( '#list' ),
		inputElement = document.querySelector( '#newTask' ),
		addButtonElement = document.querySelector( '#addButton' );

	addButtonElement.addEventListener( 'click', function() {
		var value = inputElement.value;

		if ( value.length < 1 ) {
			return;
		}

		list.push( value );
		console.log( list );

		value = '';
		console.log( value );
	} );
} )();
