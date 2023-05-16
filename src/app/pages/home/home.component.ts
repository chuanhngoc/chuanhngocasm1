import { Component } from '@angular/core';
import { products } from 'src/app/datas/datas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products = products;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewDetail(productId: string) {
    // Điều hướng đến trang chi tiết sản phẩm với productId
    this.router.navigate(['/product', productId]);
  }
}
