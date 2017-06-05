// index.html
	// in head:
		//   <base href="/">
// app.module.ts
	import { RouterModule } from '@angular/router';
			// ^ registers the router service.
	  // imports: [
	  //   BrowserModule,
	  //   FormsModule,
	  //   HttpModule,
	    RouterModule
	  // ],

// add routes in html file:
<ul class='nav navbar-nav'>
	<li> <a [routerLink]="['/welcome']"> Home </a> </li>
	<li> <a [routerLink]="['/products']"> Product List </a> </li>
</ul>
<router-outlet></router-outlet>
	// ^ shows where to display selected page