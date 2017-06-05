//--------------
//passing parameters to route.

// product-list.component.html
<td>
	<a [routerLink]= "['/product', product.productId]">
						          // ^ path  product/
								                          	// ^ value /:id
		{{product.productName}}
	</a>
</td>

// app.module.ts
{ path: 'product/:id', component: ProductDetailComponent }

// product-detail.component.ts
import { ActivatedRoute } from '@angular/router';

constructor ( private _route: ActivatedRoute) {
	console.log( this._route.snapshot.params['id']);
							//	^ to display value use: 
							// snapshot or observable
}	

// ^ cam be done in ngOnInit event.:
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        	  	// ^ id is passed as string. + converts it to numeric id.
        this.pageTitle += `: ${id}`;
    }
