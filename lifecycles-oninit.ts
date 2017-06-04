	// lifecycles are implemented in interfaces.
	//OnInit // perform component initialization, retrieves data from backend service.

	//OnChanges // perform action after change to input properties.

	//OnDestroy // perform cleanup.

	import { Component, OnInit } from '@angular/core';
	export class ProductListComponent implements OnInit {
	     // pageTitle:string = 'Product List';
	     // imageWidth: number = 50;
	     // products: IProduct []= [..]
	     ngOnInit(): void {
        	console.log('In OnInit');
    	}
	}

