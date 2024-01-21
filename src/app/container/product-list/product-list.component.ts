import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id:1,
      name:"Nike shoes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      brand: "NKE",
      gender:"MEN",
      category: "RUNNING",
      size: [6,8,10,12],
      color:["White","Blue","Black"],
      price: 160,
      is_in_inventory: true,
      items_left:3,
      imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id:2,
      name:"Nike shoes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      brand: "NKE",
      gender:"MEN",
      category: "RUNNING",
      size: [6,8,10,12],
      color:["White","Blue","Black"],
      price: 100,
      discountePrice: 20,
      is_in_inventory: false,
      items_left:3,
      imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug:"nike-react-infinity-run-flyknit"
    },
    {
      id:3,
      name:"Nike shoes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      brand: "NKE",
      gender:"MEN",
      category: "RUNNING",
      size: [6,8,10,12],
      color:["White","Blue","Black"],
      price: 160,
      is_in_inventory: true,
      items_left:3,
      imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug:"nike-react-infinity-run-flyknit"
    }
  ]

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter( p => p.is_in_inventory !== true).length;

  selectedFilterRadioButton:string = 'all';
  onFilterChanged(value:string){
    this.selectedFilterRadioButton = value;
  }

}
