'use strict';
( function() {
	var list = [ 'one', 'two', 'three'],
		listElement = document.querySelector( '#list' ),
		inputElement = document.querySelector( '#newTask' ),
		addButtonElement = document.querySelector( '#addButton' );

	function addItem() {
		var value = inputElement.value;

		if ( value.length < 1 ) {
			return;
		}

		list.push( value );
		console.log( list );

		renderList();

		inputElement.value = '';
	};

	function addItemInDom( item, index ) {
		var newItem = document.createElement( 'li' );
		newItem.innerHTML = item;

		var removeButton = document.createElement( 'button' );
		removeButton.innerHTML = 'x';
		newItem.append( removeButton );

		removeButton.addEventListener( 'click', function() {
			removeItem( index );
		} );

		listElement.append( newItem );
		newItem.setAttribute( 'data-item', index );

		saveToLocalStorage()
	};

	function removeItem( index ) {
		list.splice( index, 1 );
		renderList();

		saveToLocalStorage()
	};

	function saveToLocalStorage() {
		console.log( JSON.stringify( list ) );
		localStorage.setItem( 'tamsarr_', JSON.stringify( list ) );
	}

	function renderList() {
		listElement.innerHTML = '';
		list.forEach( function( item, index ) {
			addItemInDom( item, index );
		} );
	};

	addButtonElement.addEventListener( 'click', addItem );

	renderList();
} )();
