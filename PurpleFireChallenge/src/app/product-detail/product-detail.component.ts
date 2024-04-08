import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  selectedSize: number = 1; // Initially select the first size
  hoveredSize: number = 0; // Initially set hovered size to the first size

  selectSize(size: number) {
    this.selectedSize = size;
  }
}
