	{{ product.productCode | lowercase }}
							//	^ to lower case.
	{{ product.price | currency:'USD':true:'1.2-2' | lowercase }}
	//						 			^ to display currency symbol.
	// 											^ minimum - maximum number of fractional digits.