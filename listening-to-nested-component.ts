// takes data via input 
		// returns data via events.		
			// product-list.component.html
                        <td>
                            <ai-star [rating]='product.starRating'>
                           				// ^ takes data @Input()
                           (ratingClicked)='onRatingClicked($event) '>
                           				// ^  returns data @Output()
                            </ai-star>
                        </td>

        // star.component.ts 
        	//import { Component, OnChanges,
        	 Input ,Output, EventEmitter } from '@angular/core';
				// @Component({
				       selector: 'ai-star',
				//     templateUrl: './star.component.html',
				//     styleUrls: ['./star.component.css']
				// })
			// export class StarComponent{
					@input() rating: number;
				// 	starWidth: number;
					@Output() ratingClicked: EventEmitter<string> = 
			    	new EventEmitter<string>(); 
			    //	ngOnChanges(): void {
			    //  	this.starWidth = this.rating * 86/5;
				//	}
			    	onClick() {
			        	this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); 
			    	}
			// }


		// product-list.component.ts
			onRatingClicked(message: string): void {
		        this.pageTitle = 'Product List: ' + message;
		    }
    