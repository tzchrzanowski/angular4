//Routes guards types:

//	CanActivate // guards navigation to a route

//	CanDeactivate // guards navigation from a route

//	Resolve // pre-fetch data before activating a route.

//	CanLoad // prevents asynchronous routing.

// product-guard.service.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
			// ^ contains information about route in that moment in time
@Injectable()
export class ProductDetailGuard implements CanActivate {
											// ^ guards type
	canActivate(route: ActivatedRouteSnapshot): boolean{
					// ^ true to actiavate route
        // let id = +route.url[1].path;
        // if (isNaN(id) || id < 1) {
        //     alert ('Invalid product id');
        //     // start a new navigation to redirect to list page:
        //     this._router.navigate(['/products']);
        //     // abort current navigation:
        //     return false;
        // }
        // return true;
        		// ^ basic number check of product id link
	}
}

// service for guard has to be provided on app.modulets level:
// app.module.ts
import { ProductDetailGuard } from './products/product-guard.service';

// @NgModule({
//		...
//	    RouterModule.forRoot([
//      	{ path: 'products',
				canActivate: [ ProductDetailGuard ],
//				component: ProductListComponent },
//		    { path: 'product/:id', component: ProductDetailComponent },
//		...
		  providers: [ ProductDetailGuard ],
//		...
