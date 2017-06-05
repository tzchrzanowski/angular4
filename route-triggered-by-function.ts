// product-detail.component.ts
import { Router } from '@angular/Router';

constructor(private _router: Router) {}

onBack(): void {
	this._router.navigate(['/products']);
}

// product-detail.component.html

        <a class="btn btn-default" (click)='onBack()' style='width:80px'>
        								                	// ^ route function
  //          <i class="glyphicon glyphicon-chevron-left"></i> Back
  //      </a>
