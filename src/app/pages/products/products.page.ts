import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Product, ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    const loading = await this.loadingController.create(
      {
        message: "Loading...",
        spinner: "bubbles"
      }
    )

    await loading.present();

    this.productService.getAllProducts().subscribe
      (
        (response) => {
          loading.dismiss();
          this.products = [...this.products, ...response];
        }
      )
  }
}
