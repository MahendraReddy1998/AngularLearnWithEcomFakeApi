import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  dummyLinks = [ 'Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']

}
