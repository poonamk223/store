import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    title: '',
    price: null,
    description: '',
    category: '',
    image: ''
  };
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  addProduct(): void {
    const url = 'https://fakestoreapi.com/products';
    this.http.post(url, this.product).subscribe({
      next: response => {
        alert('Product added successfully!');
        this.router.navigate(['/']);
      },
      error: error => {
        this.errorMessage = 'Error adding product. Please try again.';
      },
      complete: () => {
        console.log('Product addition request completed.');
      }
    });
  }
}
