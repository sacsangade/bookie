import {Component, signal, inject} from '@angular/core';
import {form, FormField, FormRoot, required} from '@angular/forms/signals';
import { HubToastService } from 'ng-hub-ui-toast';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
//Category Data Service API Call
import { CategoryData } from '../../../../../services/booking/category/category-data';
//Interface Category Call
import { BookingCategoryRequestInterface } from '../../../../../interfaces/booking/category/booking-category-request-interface';

@Component({
  imports: [FormField, FormRoot, NgClass],
  selector: 'app-add-category',
  styleUrl: './add-category.css',
  templateUrl: './add-category.html',
})

export class AddCategory {
  
  private toast = inject(HubToastService);
  private router = inject(Router);
  private categoryDataService = inject(CategoryData);

  // Category Add Form Model
  bookingCategoryModel = signal({
    title: '',
    description: '',
  });
  // Category Add Form 
  bookingCategoryForm = form(
    this.bookingCategoryModel,
    (schemaPath) => {
      required(schemaPath.title, {message: 'Category title is required'});
    },
    {
      submission: {
        action: async () => {
          await this.submitToServer(this.bookingCategoryModel());
        },
      },
    },
  );
  // Form Submit To Server
  private async submitToServer(payload: BookingCategoryRequestInterface) {
    this.categoryDataService.create(payload).subscribe({
      next: (response) => {
         if(response.status=="ok") {
          // Toaster Popup
          this.toast.success(
            'Category Added Successfully!', 
            'Success', 
            { timeOut: 2000, progressBar: true }
          );
          //Redirect To Categories Page
          setTimeout(() => {
            this.router.navigate(['/booking/categories']); 
          }, 2000);
        }
      },
      error: (error) => {
        // Toaster Popup
        this.toast.error(
          error.message, 
          'An unexpected error occurred', 
          { timeOut: 2000, progressBar: true }
        );
      },
    });
  }

}


