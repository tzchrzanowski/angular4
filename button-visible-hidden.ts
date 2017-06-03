//	html:


//	<button class="btn btn-primary" (click)='toggleImage()'>Show Image</button> // controls the visibility of td below:

//   <td><img *ngIf='showImage'  	// this item is visible-hidden
		src={{product.imageUrl}} 
		[style.width.px]='imageWidth' 
		[style.margin.px]='imageMargin' ></td>


// script:

	showImage: boolean = false;
	
	toggleImage(): void {
    	this.showImage = !this.showImage;
    }

