import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { Product } from 'src/app/models/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products!: any;
  orders!: any;
  cant = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((catsSnapshot) => {
      this.products = [];
      catsSnapshot.forEach((prod: any) => {
        this.products.push({
          id: prod.payload.doc.id,
          data: prod.payload.doc.data(),
          qty: this.cant
        });
      })
    });
  }
  minus(id: string) {
    const count = this.products.filter((obj: any) => obj.id == id);
    if (count[0].cant > 1) {
      this.products.filter((obj: any) => obj.id == id)[0].cant -= 1;
    }
  }
  plus(id: string) {
    this.products.filter((obj: any) => obj.id == id)[0].cant += 1;
  }
  add(product: Product) {
    console.log(product);
  }
}


