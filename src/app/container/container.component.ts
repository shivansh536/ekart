import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   name="shivansh";
//   addToCart:number=0;
//   product = {
//     name : "iphone",
//     price : 990,
//     color :'Red',
//     discount : 9.5,
//     inStock:5,
//     pImage:'/assets/image/iphone.jpg'
//   }

//   getDiscountedPrice() {
//     return this.product.price - (this.product.price*this.product.discount/100)
//   }

//   onNameChange(event:any){
//     this.name = event.target.value;
//   }

//   decrementCartValue(){
//     if(this.addToCart>0){
//       this.addToCart--;
//     }
//   }
//   increamentCartValue(){
//     if(this.addToCart < this.product.inStock){
//       this.addToCart++;
//     }  
//   }
// }

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {

  searchText : string = '';

  @ViewChild('ProductListComponent')productListComponent: ProductListComponent;

  setSearchText(value:string){
    this.searchText = value;
  }
  
}
