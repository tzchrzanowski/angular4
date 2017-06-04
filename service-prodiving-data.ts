// in service file:
// product.service.ts
		import { Injectable } from '@angular/core';
		import { IProduct } from './product';

		@Injectable() export class ProductService{
		    getProducts(): IProduct[]{
		        return [...];
		}

//app.component.ts
		import { ProductService } from './products.... '
		// @Component({
		// 	selector: 'pm-app',
		// 	template: ..........
			providers: [ProductService]
		// })

// product-list.component.ts
		import { ProductService } from './product.service';
			
		//export class ProductListComponent implements OnInit {
	    	constructor(private _productService: ProductService){
	       				// ^ does not have to be private
	    	}
    		// ngOnInit(): void{
    			this.products = this._productService.getProducts();
    	// }