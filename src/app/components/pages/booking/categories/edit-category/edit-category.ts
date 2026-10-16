import { Component, inject, OnInit, signal } from '@angular/core';
import {form, FormField, FormRoot, required} from '@angular/forms/signals';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { HubToastService } from 'ng-hub-ui-toast';
//Category Data Service API Call
import { CategoryData } from '../../../../../services/booking/category/category-data';
//Interface Category Call
import { BookingCategoryRequestInterface } from '../../../../../interfaces/booking/category/booking-category-request-interface';

@Component({
  imports: [FormField, FormRoot, NgClass],
  selector: 'app-edit-category',
  styleUrl: './edit-category.css',
  templateUrl: './edit-category.html',
})

export class EditCategory implements OnInit {

  private route = inject(ActivatedRoute);
  private categoryDataService = inject(CategoryData)
  private toast = inject(HubToastService);
  private router = inject(Router);
  
  categoryid = Number(this.route.snapshot.paramMap.get('id'));

  // Category Edit Form Model
  bookingEditCategoryModel = signal({
      title: '',
      description: '',
  });
  // Category Edit Form 
  bookingEditCategoryForm = form(
    this.bookingEditCategoryModel,
    (schemaPath) => {
      required(schemaPath.title, {message: 'Category title is required'});
    },
    {
      submission: {
        action: async () => {
          await this.submitToServer(this.bookingEditCategoryModel());
        },
      },
    },
  );
  // Form Submit To Server 
  private async submitToServer (payload: BookingCategoryRequestInterface) {
    this.categoryDataService.update(this.categoryid, payload).subscribe({
      next: (response) => {
        if(response.status=="ok"){
          // Toaster Popup
          this.toast.success(
            'Category Update Successfully!', 
            'Success', 
            { timeOut: 2000, progressBar: true }
          );
          //Redirect To Categories Page
          setTimeout(() => {
            this.router.navigate(['/booking/categories']); 
          }, 2000);
        }
      },
    });
  };

  ngOnInit(): void {
    this.categoryDataService.getSingle(this.categoryid).subscribe({
      next: (response) => {
        this.bookingEditCategoryForm.title().value.set(response.categorytitle);
        if(response.categorydescription) {
          this.bookingEditCategoryForm.description().value.set(response.categorydescription);
        }
      },
    });
  }

}
