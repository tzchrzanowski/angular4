 // html

 // <table class="table" *ngIf='products && products.length'>       // if products exists and are defined
 //                <thead>
 //                    <tr>
 //                        <th>
 //                            <button class="btn btn-primary">
 //                                Show Image
 //                            </button>
 //                        </th>
 //                        <th>Product</th>
 //                        <th>Code</th>
 //                        <th>Available</th>
 //                        <th>Price</th>
 //                        <th>5 star rating</th>
 //                    </tr>
 //                </thead>
 //                <tbody>
 //                    <tr *ngFor='let product of products'>        // 'product' is any variable that we want to use here. 
 //                       <!-- 
 //                           <td><img [src]='product.imageUrl'></td>
 //                           <td><img src='http://openclipart.org/{{product.imageUrl}}'></td>
 //                        -->
 //                        <td><img src={{product.imageUrl}} [style.width.px]='imageWidth' [style.margin.px]='imageMargin' ></td>
 //                        <td>{{product.productName}}</td>
 //                        <td>{{product.productCode}}</td>
 //                        <td>{{product.releaseDate}}</td>
 //                        <td>{{product.price}}</td>
 //                        <td>{{product.starRating}}</td>
 //                    </tr>
 //                </tbody>
 //            </table>


// script:
 export class ProductListComponent{
     pageTitle:string = 'Product List';
     imageWidth: number = 50;
     imageMargin:number = 2;

     products: any[]= [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ]; 
}