import { Component } from '@angular/core';

import { products , Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  /*share(product: Product): void {
    window.alert(`The ${product.name} has been shared`);
    <a href="tg://resolve?domain=@asper1n&text={{product.link}}">S</a>
  }*/
  onNotify(product: Product){
    window.alert(`You will be notified when the ${product.name} goes on sale`)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/