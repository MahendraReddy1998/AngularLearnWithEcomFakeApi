// home.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.slice(0, 6); // Display first 3 products as featured
    });
  }
  carouselItems = [
    { id: 20, src: 'https://picsum.photos/id/20/800/400', alt: 'First slide' },
    { id: 26, src: 'https://picsum.photos/id/26/800/400', alt: 'Second slide' },
    { id: 39, src: 'https://picsum.photos/id/39/800/400', alt: 'Third slide' }
  ];
  bannerItems = [
    {id: 1, src: 'https://picsum.photos/id/119/300/150', alt: 'Banner 1'},
    {id: 2, src: 'https://picsum.photos/id/85/300/150', alt: 'Banner 2'},
    {id: 3, src: 'https://picsum.photos/id/96/300/150', alt: 'Banner 3'},
  ]
}
