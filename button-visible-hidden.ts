//	html:

// 	controls the visibility of td below:
	<button class="btn btn-primary" (click)='toggleImage()'> {{showImage ? 'Hide' : 'Show'}} Image </button>
								// ^ changes caption

		<td><img *ngIf='showImage'  	// this item is visible-hidden
		src={{product.imageUrl}} 
		[style.width.px]='imageWidth' 
		[style.margin.px]='imageMargin' ></td>


// script:

	showImage: boolean = false;
	
	toggleImage(): void {
    	this.showImage = !this.showImage;
    }

