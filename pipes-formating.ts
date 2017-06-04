	{{ product.productCode | lowercase }}
			//	^ to lower case.
	{{ product.price | currency:'USD':true:'1.2-2' | lowercase }}
	//				^ to display currency symbol.
	// 					^ minimum - maximum number of fractional digits.

// creating custom pipe:
// create file product-filter.pipe.ts
				// ^ custom name.
import { Pipe, PipeTransform } from '@angular/core';
//import { IProduct } from  './product';
@Pipe({
	name:'productFilter'
		// ^ we use this one in html
})

export class ProductFilterPipe implements PipeTransform{
	transform(value: IProduct[], filterBy: string): IProduct[]{
							// ^ using custom interface
		// filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
		//        		 // ^ possibility that no filter by string is defined.
		// return filterBy ? value.filter((product: IProduct) =>
		//         // ^ if exists      ^ then filter list
		// product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
		//       // ^ filtered list of products                 //              ^
		//                                                      // if no filter
		//                                                      // return default list
		    
	}
}
// using custom pipe:
	// add pipe to angular module.
// 		@NgModule({
// 		  declarations: [
// 		    AppComponent,
// 		    ProductListComponent,
 		    ProductFilterPipe
// 		  ],
	// add pipe to html element:
		<tr *ngFor ='let product of products | productFilter: listFilter'>
									// ^ defined in class export in component:
										// export class ProductListComponent implements OnInit {
										//      pageTitle:string = 'Product List';
										//      imageWidth: number = 50;
										//      imageMargin:number = 2;
										//      showImage: boolean = false;
											listFilter: string = 'cart';
										//      products: IProduct []= [...																	
